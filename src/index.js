import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter'
import { Provider } from 'react-redux'

import "./index.css";
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'; 
import { firebase } from './firebase/firebase';
// import App from './App';
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

const pepe = ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <AppRouter/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(startSetExpenses()).then(() => {
      pepe
    })  

    history.push('/dashboard')
  } else {
    pepe
    history.push('/')
  }
})