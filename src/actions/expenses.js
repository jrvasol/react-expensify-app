import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

// ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        // Spreads the obj and adds default obj value
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        
        const expense = { description, note, amount, createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
}

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((expense) => {
                expenses.push({
                    id: expense.key,
                    ...expense.val()
                })
            });
            dispatch(setExpenses(expenses));
        })
    }  
  };

export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});