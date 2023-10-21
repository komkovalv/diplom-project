import users from "./api/fake.api/user.api";
import professions from "./api/fake.api/professions.api";
import qualities from "./api/fake.api/qualities.api";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
const API = {
    users,
    professions,
    qualities
};
export default API;
