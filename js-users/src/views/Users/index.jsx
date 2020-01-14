import React, {useEffect, useState} from 'react';
import UserList from './UserList';
import Pagination from "./Pagination";
import * as API from "../../util/API";
import {oppositeStatus, parsePages, updateUsers} from "../../util/data";
import Loader from "../../components/Loader";

const Index = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const {data} = await API.fetchUsers();
                setUsers(parsePages(data));
                setLoading(false)
            } catch (error) {
                setError(error);
                setUsers(error.message);
                setLoading(false)
            }
        };
        fetchUsers();
    }, []);

    const toggleStatus = async (userId, userStatus, page) => {
        setUsers(updateUsers(users, page, userId, {'loading': true}));
        try {
            await API.toggleStatus(userId, oppositeStatus(userStatus));
            setUsers(updateUsers(users, page, userId, {loading: false, status: oppositeStatus(userStatus)}))
        } catch (e) {
            setUsers(updateUsers(users, page, userId, {loading: false, error: e.message}))
        }
    };

    if (loading) {
        return (
            <Loader/>
        )
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <div className={'user-list'}>
            <h2 className={'heading-secondary'}>Users</h2>
            <UserList users={users} toggleStatus={toggleStatus}/>
            <Pagination totalPages={users.totalPages}/>
        </div>
    )
};

export default Index;

