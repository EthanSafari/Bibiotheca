import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { OptionProvider } from './context/OptionContext';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <OptionProvider>
        <App />
      </OptionProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
