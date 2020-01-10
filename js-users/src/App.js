import './App.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Users from "./views/Users/Users";
import {UsersProvider} from "./Providers/UsersProvider";
import AddUser from "./views/AddUser/AddUser";
import EditUser from "./views/EditUser/EditUser";
import Navigation from "./views/Navigation/Navigation";


function App() {
    return (
        <Router>
            <UsersProvider>
                <Navigation/>
                <Switch>

                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/new">
                        <AddUser/>
                    </Route>
                    <Route path="/edit">
                        <EditUser/>
                    </Route>
                    <Redirect from={'/'} to={'/users/1'}/>
                </Switch>
            </UsersProvider>
        </Router>

    );
}

export default App;
