import React from 'react';
import {
    Link,
    useParams
} from "react-router-dom";
import {formatDate} from "../../util/data";


const displayActivate = status => status === 'active' ? 'lock' : 'activate';

const UserList = ({users, toggleStatus}) => {
    let {page} = useParams();

    return (
        <table className={'user-table'}>
            <thead>
            <tr>
                <th align={'left'}>Last name</th>
                <th align={'left'}>First name</th>
                <th align={'left'}>Created at</th>
            </tr>
            </thead>
            <tbody>
            {users[page].map(user => (
                <tr key={user.id} className={`user--${user.status}`}>
                    <td><Link to={`/edit/${user.id}`}>{user['last_name']}</Link></td>
                    <td><Link to={`/edit/${user.id}`}>{user["first_name"]}</Link></td>
                    <td>{formatDate(user["created_at"])}</td>
                    <td width={4} onClick={() => toggleStatus(user.id, user.status, page)}>
                        <div
                            className={`btn--status btn--status--${user.loading ? 'loading' : displayActivate(user.status)}`}>
                            {user.loading ? 'loading...' : displayActivate(user.status)}
                        </div>
                    </td>
                    {user.error && <td>{user.error}</td>}
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default UserList
