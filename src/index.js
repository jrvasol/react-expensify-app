import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'

import "./index.css";
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'; 
import './firebase/firebase';
// import App from './App';
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <React.StrictMode>
     <Provider store={store}>
        <AppRouter/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
})