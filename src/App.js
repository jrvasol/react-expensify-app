import React from 'react';
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore();

function App() {
  return (
    <AppRouter/>
  );
}

export default App;
