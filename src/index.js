import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Store/Store";
import {initAuth} from "./Store/AuthSlice/AuthSlice";


const root = ReactDOM.createRoot(document.getElementById('root'));


const Root = async () => {
    await store.dispatch(initAuth())
    // console.log(store.getState().auth)

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
};

Root()




