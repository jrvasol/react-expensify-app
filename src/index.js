import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'; 
import './firebase/firebase';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);