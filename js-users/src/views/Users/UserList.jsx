import React from 'react';
import {
    useHistory,
    useParams
} from "react-router-dom";
import {formatDate} from "../../util/data";


const displayActivate = status => status === 'active' ? 'lock' : 'activate';

const UserList = ({users, toggleStatus}) => {
    let {page} = useParams();
    let history = useHistory();
    const navigateToEdit = (id) => {
        history.push(`/edit/${id}`)
    };

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
                <tr key={user.id} className={`user--${user.status}`} data-testid={user.id}>
                    <td onClick={() => navigateToEdit(user.id)}>{user['last_name']}</td>
                    <td onClick={() => navigateToEdit(user.id)}>{user["first_name"]}</td>
                    <td onClick={() => navigateToEdit(user.id)}>{formatDate(user["created_at"])}</td>
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
