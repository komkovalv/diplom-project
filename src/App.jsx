import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./layouts/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";
import User from "./layouts/usersList";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/users" component={Users} />
                <Route path="/user/:userId" component={User} />
                
            </Switch>
        </div>
    );
};
export default App;
