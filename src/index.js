import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import AppProvider from "./components/common/state/appProvider";


ReactDom.render(<AppProvider><App/></AppProvider>, document.getElementById("root"));
