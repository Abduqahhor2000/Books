import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { store } from './store/index';
import { Provider } from "react-redux";
// import Counter from "./features/counter/Counter"

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
   document.getElementById('root')
);
