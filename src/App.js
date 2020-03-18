import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouterComponent from './routingComponent'
import { Provider } from 'react-redux'
import store from './components/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterComponent />
      </div>
    </Provider>
  );
}

export default App;
