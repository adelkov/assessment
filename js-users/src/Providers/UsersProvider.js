import React, {useEffect, useState} from "react";
import * as API from '../util/API'
import {parsePages} from "../util/data";

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


    return (
        <UsersContext.Provider
            value={{users, loading, error}}
        >
            {props.children}
        </UsersContext.Provider>
    );
};




