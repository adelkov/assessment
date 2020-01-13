import React, {useEffect, useState} from 'react';
import UserList from './UserList';
import Pagination from "./Pagination";
import * as API from "../../util/API";
import {oppositeStatus, parsePages, updateUsers} from "../../util/data";

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
    return (
        <div>Users
            <UserList users={users} loading={loading} errors={error} toggleStatus={toggleStatus}/>
            {loading || <Pagination totalPages={users}/>}
        </div>
    )
};

export default Index;

