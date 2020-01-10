import './App.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Users from "./views/Users";
import {UsersProvider} from "./Providers/UsersProvider";


function App() {
    return (
        <UsersProvider>
            <Router>
                <Switch>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Redirect from={'/'} to={'/users/1'} />
                </Switch>
            </Router>
        </UsersProvider>
    );
}

export default App;
