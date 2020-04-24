import React from "react";
import ReactDOM from "react-dom";
import App from "./app";


import { BrowserRouter, Switch, Route } from 'react-router-dom';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;