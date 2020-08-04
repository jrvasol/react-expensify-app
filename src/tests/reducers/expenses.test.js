import expensesReducer from '../../reducers/expenses'

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

test('should remove expense based on id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }

    expect(expensesReducer(expenses, action)).toEqual(expenses.filter(expense => expense.id !== expenses[0].id))
})

test('should add expense value', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '6',
            description: 'Chocolate 2',
            note: '',
            amount: 300,
            createdAt: 10000000000
        }
    }

    expect(expensesReducer(expenses, action)).toEqual([ ...expenses, action.expense ])
})

test('should edit expense value', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: 'test'
        }
    }

    expect(expensesReducer(expenses, action)).toEqual(expenses.map((expense, index) => {
        if(expense.id === expenses[2].id) {
            return { ...expense, ...action.updates }
        } else {
            return expense 
        }
    }));
})

test('should edit expense value 2', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: 'test'
        }
    }

    expect(expensesReducer(expenses, action)[2].description).toBe(action.updates.description);
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});