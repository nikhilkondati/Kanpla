// mockDatabase.ts

import { seededOrders, seededUsers } from './db'
import { Order, Product, User, BalanceHistory } from './types'

let database = {
    orders: seededOrders,
    users: seededUsers,
    balanceHistory: [] as BalanceHistory[],
}

let currentId = 1
export const getOrders = (): Order[] => database.orders

export const getOrderById = (id: number): Order | undefined =>
    database.orders.find(order => order.id === id)

export const createOrder = (userId: string, products: Product[]): Order => {
    const newOrder: Order = {
        id: currentId++,
        products,
        userId,

        createdAt: new Date(),
    }
    database.orders.push(newOrder)

    // Update user balance and balance history
    const user = getUserById(userId);
    if (user) {
        const orderTotal = products.reduce((total, product) => 
            total + product.price * product.count, 0);
        user.balance -= orderTotal;
        database.balanceHistory.push({
            userId,
            date: newOrder.createdAt,
            balance: user.balance,
        });
        updateUser(userId, { balance: user.balance });
    }
    return newOrder
}

export const updateOrder = (
    id: number,
    updatedOrder: Partial<Order>,
): Order | undefined => {
    const order = database.orders.find(order => order.id === id)
    if (order) {
        Object.assign(order, updatedOrder)
        return order
    }
    return undefined
}

export const deleteOrder = (id: number): boolean => {
    const orderIndex = database.orders.findIndex(order => order.id === id)
    if (orderIndex !== -1) {
        database.orders.splice(orderIndex, 1)
        return true
    }
    return false
}

export const getUsers = (): User[] => database.users

export const getUserById = (id: string): User | undefined =>
    database.users.find(user => user.id === id)

export const createUser = (name: string, balance: number = 0): User => {
    const newUser: User = {
        id: `user${currentId++}`,
        name,
        balance,
    }
    database.users.push(newUser)
    return newUser
}

export const updateUser = (
    id: string,
    updatedUser: Partial<User>,
): User | undefined => {
    const user = database.users.find(user => user.id === id)
    if (user) {
        Object.assign(user, updatedUser)
        return user
    }
    return undefined
}

export const deleteUser = (id: string): boolean => {
    const userIndex = database.users.findIndex(user => user.id === id)
    if (userIndex !== -1) {
        database.users.splice(userIndex, 1)
        return true
    }
    return false
}

export const getOrdersByUserId = (userId: string): Order[] =>
    database.orders.filter(order => order.userId === userId)


export const getUserBalanceAtDate = (userId: string, date: Date): number => {
    const user = getUserById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const balance = database.balanceHistory
        .filter(bh => bh.userId === userId && bh.date <= date)
        .sort((a, b) => b.date.getTime() - a.date.getTime())[0]?.balance || user.balance;
        
        
    return balance;
}

export const getBalanceHistory = (userId: string): BalanceHistory[] => 
    database.balanceHistory.filter(bh => bh.userId === userId);