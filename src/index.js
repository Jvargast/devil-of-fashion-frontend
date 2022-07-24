import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
import './styles.css';
import {positions, transitions, Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout:5000,
  positions:positions.BOTTOM_CENTER,
  transitions:transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);