import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { CookiesProvider } from 'react-cookie';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <CookiesProvider><App/></CookiesProvider> 
);