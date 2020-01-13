import React from 'react';
import {
    Link,
    useParams
} from "react-router-dom";
import {formatDate} from "../../util/data";

const displayActivate = status => status === 'active' ? 'LOCK' : 'ACTIVATE';

const UserList = ({users, error, loading, toggleStatus}) => {
    let {page} = useParams();

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
                <tr key={user.id} className={`user--${user.status}`}>
                    <td>{user['last_name']}</td>
                    <td>{user["first_name"]}</td>
                    <td>{formatDate(user["created_at"])}</td>
                    <td onClick={() => toggleStatus(user.id, user.status, page)}>
                        {user.loading ? 'loading...' : displayActivate(user.status)}
                    </td>
                    {user.error && <td>{user.error}</td>}
                    <td><Link to={`/edit/${user.id}`}>Edit</Link></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default UserList
