import React from 'react';
import {
    NavLink
} from "react-router-dom";


const Navigation = () => {
    return (
        <div>
            <NavLink to={'/new'}>Add user</NavLink>
            <NavLink to={'/users/1'}>User list</NavLink>
        </div>
    )
};

export default Navigation
