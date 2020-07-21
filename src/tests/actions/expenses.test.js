import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('Add Expense', () => {
    const expenseData = {
        description: 'test',
        note: '',
        amount: 123,
        createdAt: 1000
    }

    const addExp = addExpense(expenseData); 

    expect(addExp).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           ...expenseData,
           id: expect.any(String)
        }
    });
});

test('Add Expense with default value', () => {
    const addExp = addExpense(); 

    expect(addExp).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           description: '',
           note: '',
           amount: 0,
           createdAt: 0,
           id: expect.any(String)
        }
    });
});

test('Remove Expense', () => {
    const removeExp = removeExpense({id: 'test123'});

    expect(removeExp).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'test123'
    });
});

test('Edit Expense', () => {
    const editExp = editExpense(
        'test1', 
        { description: 'test 1', note: 'hi' }
    )

    expect(editExp).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'test1', 
        updates: { description: 'test 1', note: 'hi' }
    })
})