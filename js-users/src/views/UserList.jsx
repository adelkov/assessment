import React, {useContext} from 'react';
import {UsersContext} from "../Providers/UsersProvider";
import {
    useParams
} from "react-router-dom";
import {formatDate} from "../util/data";


const UserList = () => {
    let {page} = useParams();
    let {users, loading, error} = useContext(UsersContext);

    if (loading) {
        return (
            <div>Loading..</div>
        )
    }

    if (error) {
        return (
            <div>Error: {error}</div>
        )
    }
    return (
        <table>
            <tbody>
            {users[page].map(user => (
                <tr key={user.id}>
                    <td>{user['last_name']}</td>
                    <td>{user["first_name"]}</td>
                    <td>{formatDate(user["created_at"])}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default UserList
