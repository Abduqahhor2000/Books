import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import store, { persistor } from './store/index';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
// import Counter from "./features/counter/Counter"

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
            <App /> 
        </PersistGate>
    </Provider>,
   document.getElementById('root')
);

