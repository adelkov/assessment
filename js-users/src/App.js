import './App.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Users from "./views/Users";
import Add from "./views/AddUser";
import Navigation from "./views/Navigation/Navigation";
import Edit from "./views/EditUser";
import {NotificationProvider} from "./Providers/Notification";
import Notification from "./components/Notification";


function App() {
    return (
        <Router>
            <Navigation/>
            <NotificationProvider>
                <Notification timeout={3000}/>
                <Switch>
                    <Route path={`/users/:page`}>
                        <Users/>
                    </Route>
                    <Route path="/new">
                        <Add/>
                    </Route>
                    <Route path="/edit/:userId">
                        <Edit/>
                    </Route>
                    <Redirect from={'/'} to={'/users/1'}/>
                </Switch>
            </NotificationProvider>
        </Router>
    );
}

export default App;
