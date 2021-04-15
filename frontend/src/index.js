import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";
import "./index.css";
import { Store } from './redux/store';
import {Provider} from "react-redux";

const store=Store();
ReactDom.render(
<Provider store={store}>
    <App/>
</Provider>
, document.getElementById("root"));
