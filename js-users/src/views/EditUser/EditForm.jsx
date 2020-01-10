import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {UsersContext} from "../../Providers/UsersProvider";

const EditForm = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const {edit: {reset, save, loading, success, error}} = useContext(UsersContext);
    let {userId, page} = useParams();
    const {list: {getUser, loading: userLoaded}} = useContext(UsersContext);

    useEffect(() => {
        return () => {
            reset()
        }
    }, []);

    if (userLoaded) {
        return (<div>loading...</div>)
    }

    const user = getUser(userId, page);

    const onCreateUser = (e) => {
        e.preventDefault();
        save(page, {
            first_name: firstName || user.first_name,
            last_name: lastName || user.last_name,
            id: userId
        });
    };


    return (
        <form onSubmit={onCreateUser}>
            <input
                placeholder={user.last_name}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <span>{error && error['last_name']}</span>
            <input
                placeholder={user.first_name}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <span>{error && error['first_name']}</span>
            <button type={'submit'}>Save</button>
            {loading && 'Saving...'}
            {success && 'Saved'}
        </form>
    )
};

export default EditForm;