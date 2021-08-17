import React from "react";
import {Router,} from "react-router-dom";
import Home from "./Home/Home";
import history from '../util/history';
import "./App.css";

const App = () => {
    return <Router history={history}><Home/></Router>;
};

export default App;
