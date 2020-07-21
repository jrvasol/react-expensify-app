import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 100,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Coffee',
        note: '',
        amount: 500,
        createdAt: 1000
    },
    {
        id: '3',
        description: 'Candy',
        note: '',
        amount: 50,
        createdAt: 400
    },
    {
        id: '4',
        description: 'Coffee 2',
        note: '',
        amount: 600,
        createdAt: 3000000000
    },
    {
        id: '5',
        description: 'Chocolate',
        note: '',
        amount: 300,
        createdAt: 10
    }
]

test('should filter by text value', () => {
    const filters = {
        text: 'Coffee',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    
    expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[3], expenses[1]]);
})

test('should match text filter on uppercase characters', () => {
    const filters = {
        text: 'COFFEE',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[3], expenses[1]]);
})

test('should sort expenses by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[3],expenses[1],expenses[2],expenses[4],expenses[0]])
})

test('should sort expenses by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[3], expenses[1], expenses[4], expenses[0], expenses[2]])
})

test('should filter expenses by start date only', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(3000000000),
        endDate: undefined
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[3]]);
})

test('should filter expenses by end date only', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(3000)
    }
    
    expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[1], expenses[2], expenses[4], expenses[0]]);
})

test('should filter expenses by start date and end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment(3000)
    }

    expect(getVisibleExpenses(expenses, filters)).toEqual([expenses[1], expenses[2], expenses[4], expenses[0]]);
})