import React from 'react';
import AppRouter from './routers/AppRouter'

import { Provider } from 'react-redux'

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'

import configureStore from './store/configureStore'

const store = configureStore();

store.dispatch(addExpense({description: 'January Rent', amount: 54500, createdAt: 1000}))
store.dispatch(addExpense({description: 'Coffee', amount: 500, createdAt: -1000}))
store.dispatch(addExpense({description: 'Coffee', amount: 5400, createdAt: 2000}))

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
