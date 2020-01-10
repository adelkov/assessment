import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import EditForm from "./EditForm";

const EditUser = () => {
    let match = useRouteMatch();

    return (
        <div>edit User
            <Switch>
                <Route path={`${match.path}/:page/:userId`}>
                   <EditForm />
                </Route>
                <Redirect from={`${match.path}`} to={`${match.path}/1`}/>
            </Switch>
        </div>
    )
};

export default EditUser;