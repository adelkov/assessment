import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import UserList from './UserList';
import Pagination from "./Pagination";

const Users = () => {
    let match = useRouteMatch();

    return (
        <div>Users
            <Switch>
                <Route path={`${match.path}/:page`}>
                    <UserList/>
                    <Pagination />
                </Route>
                <Redirect from={`${match.path}`} to={`${match.path}/1`}/>
            </Switch>
        </div>
    )
};

export default Users;