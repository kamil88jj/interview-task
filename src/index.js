import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './redux/reducers/rootReducer';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


  const app = (
    <Provider store={store}>
    <App />
  </Provider>
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  app
);
