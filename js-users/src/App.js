import './design/main.scss'
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
import {ErrorBoundary} from "./components/ErrorBoundary";


function App() {
    return (
        <Router>
            <NotificationProvider>
                <Navigation/>
                <div className="app-container">
                    <div className={'app'}>
                        <Switch>
                            <Route path={"/users/:page(\\d+)"}>
                                <ErrorBoundary>
                                    <Users/>
                                </ErrorBoundary>
                            </Route>
                            <Route path="/new">
                                <Add/>
                            </Route>
                            <Route path={`/edit/:userId(\\d+)`}>
                                <Edit/>
                            </Route>
                            <Redirect from={'/'} to={'/users/1'}/>
                        </Switch>
                    </div>
                </div>
            </NotificationProvider>
        </Router>
    );
}

export default App;
