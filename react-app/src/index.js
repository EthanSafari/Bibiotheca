import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { OptionProvider } from './context/OptionContext';
import { ModalProvider, Modal } from './context/Modal';

const store = configureStore();

function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
        <OptionProvider>
          <App />
          <Modal />
        </OptionProvider>
      </Provider>
    </ModalProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
