import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

import './shared/styles/index.scss';
import { Provider } from "react-redux";
import store from "./store/store";

const root = createRoot(document.getElementById('root'));

root.render (
    <>
    {/* <StrictMode>*/}
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    {/* </StrictMode> */}
    </>
)