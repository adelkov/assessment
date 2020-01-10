import React, {useEffect, useState} from "react";
import * as API from '../util/API'
import {parsePages, updateUsers, oppositeStatus} from "../util/data";

export const UsersContext = React.createContext({});

export const UsersProvider = (props) => {

    const [users, setUsers] = useState({
        data: null,
        error: null,
        loading: true
    });

    const [editState, setEditState] = useState({
        loading: false,
        error: null,
        success: null
    });

    const [addState, setAddState] = useState({
        loading: false,
        error: null,
        success: null
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const {data} = await API.fetchUsers();
                setUsers({...users, data: parsePages(data), loading: false});
            } catch (error) {
                setUsers({...users, error: error.message})
            }
        };
        fetchUsers();
    }, [editState.success, addState.success]);

    const toggleStatus = async (userId, userStatus, page) => {
        setUsers({...users, data: updateUsers(users.data, page, userId, {'loading': true})});
        try {
            await API.toggleStatus(userId, oppositeStatus(userStatus));
            setUsers({
                ...users, data: updateUsers(users.data, page, userId, {
                    'loading': false,
                    'status': oppositeStatus(userStatus)
                })
            })
        } catch (e) {
            setUsers({...users, data: updateUsers(users.data, page, userId, {'loading': false, error: e.message})})
        }
    };

    const addUser = async user => {
        setAddState({...addState, loading: true});
        try {
            await API.addUser({...user, status: 'active'});
            setAddState({...addState, error: null, success: true, loading: false});
        } catch (e) {
            setAddState({...addState, error: e.response.data});
        }
    };

    const save = async (page, user) => {
        setEditState({...editState, loading: true});
        try {
            await API.updateUser(user);
            setEditState({...editState, loading: false, success: true})
        } catch (e) {
            setEditState({...editState, error: e.message, loading: false});
        }
    };

    const getUser = (userId, page) => users.data[page].find(user => user.id === +userId)

    const resetEdit = () => {
        setEditState({
            loading: false,
            error: null,
            success: null
        })
    };

    const resetAdd = () => {
        setAddState({
            loading: false,
            error: null,
            success: null
        })
    };

    return (
        <UsersContext.Provider
            value={{
                list: {toggleStatus, getUser, ...users},
                add: {addUser, ...addState, reset: resetAdd},
                edit: {save, ...editState, reset: resetEdit}
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
};

