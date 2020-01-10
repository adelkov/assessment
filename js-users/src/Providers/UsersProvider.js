import React, {useEffect, useState} from "react";
import * as API from '../util/API'
import {parsePages, updateUsers} from "../util/data";

const defaultUserContext = {
    users: [],
    loading: true,
    error: null,
};

export const UsersContext = React.createContext(defaultUserContext);

export const UsersProvider = (props) => {

    const [users, setUsers] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const {data} = await API.fetchUsers();
                setUsers(parsePages(data));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const toggleStatus = async (userId, userStatus, page) => {
        setUsers(updateUsers(users, page, userId, {'loading': true}));
        try {
            await API.toggleStatus(userId, userStatus === 'active' ? 'locked' : 'active');
            setUsers(updateUsers(users, page, userId, {
                'loading': false,
                'status': userStatus === 'active' ? 'locked' : 'active'
            }))
        } catch (e) {
            setUsers(updateUsers(users, page, userId, {'loading': false, error: e.message}))
        }
    };

    return (
        <UsersContext.Provider
            value={{users, loading, error, toggleStatus}}
        >
            {props.children}
        </UsersContext.Provider>
    );
};





