import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureStore([thunk]); 

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
})

test('Add Expense', () => {
    const addExp = addExpense(expenses[0]); 

    expect(addExp).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
});

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Rent',
        note: '',
        amount: 109500,
        createdAt: '123123'
      }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(addExpense({
            id: expect.any(String),
            ...expenseData
        }));

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(addExpense({
            id: expect.any(String),
            ...expenseDefaults
        }));

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
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
});


test('should setup set expense action object data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual(setExpenses(expenses));
});