import { Order, User } from './types'

export const seededOrders: Order[] = [
    {
        id: 1,
        userId: 'user1',
        products: [
            { id: 1, name: 'Potato Crisps', price: 4.32, count: 1 },
            { id: 2, name: 'Beer', price: 4.78, count: 1 },
        ],
        createdAt: new Date('2021-01-01T12:00:00Z'),
    },
    {
        id: 2,
        userId: 'user2',
        products: [
            { id: 7, name: 'Coke', price: 9.99, count: 2 },
            { id: 5, name: 'French Fries', price: 8.99, count: 3 },
        ],
        createdAt: new Date('2021-01-01T12:00:00Z'),
    },
    {
        id: 4,
        userId: 'user3',
        products: [
            {
                id: 5,
                name: 'Burger',
                price: 5.99,
                count: 1,
            },
            {
                id: 6,
                name: 'Soda',
                price: 1.99,
                count: 2,
            },
        ],
        createdAt: new Date('2021-01-01T12:00:00Z'),
    },
    {
        id: 5,
        userId: 'user1',
        products: [
            {
                id: 7,
                name: 'Salad',
                price: 7.99,
                count: 1,
            },
            {
                id: 8,
                name: 'Juice',
                price: 2.99,
                count: 3,
            },
        ],
        createdAt: new Date('2021-01-01T12:00:00Z'),
    },
    {
        id: 6,
        userId: 'user2',
        products: [
            {
                id: 9,
                name: 'Sandwich',
                price: 4.99,
                count: 2,
            },
            {
                id: 10,
                name: 'Coffee',
                price: 2.5,
                count: 1,
            },
        ],
        createdAt: new Date('2021-01-01T12:00:00Z'),
    },
    {
        id: 7,
        userId: 'user3',
        products: [
            {
                id: 11,
                name: 'Pasta',
                price: 8.99,
                count: 2,
            },
            {
                id: 12,
                name: 'Tea',
                price: 1.5,
                count: 4,
            },
        ],
        createdAt: new Date('2021-01-01T12:00:00Z'),
    },
    {
        id: 8,
        userId: 'user1',
        products: [
            {
                id: 13,
                name: 'Tacos',
                price: 3.99,
                count: 3,
            },
            {
                id: 14,
                name: 'Lemonade',
                price: 2.0,
                count: 1,
            },
        ],
        createdAt: new Date('2021-01-01T12:00:00Z'),
    },
]

export const seededUsers: User[] = [
    {
        id: 'user1',
        name: 'Alice',

        balance: 9.21,
    },
    {
        id: 'user2',
        name: 'Bob',

        balance: 0,
    },
    {
        id: 'user3',
        name: 'Charlie',

        balance: 66.71,
    },
]
