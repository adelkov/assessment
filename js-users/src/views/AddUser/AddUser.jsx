import React, {useContext, useEffect, useState} from 'react';
import {UsersContext} from "../../Providers/UsersProvider";

const AddUser = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const {add: {addUser, loading, error, success, reset}} = useContext(UsersContext);

    const onCreateUser = (e) => {
        e.preventDefault();
        addUser({first_name: firstName, last_name: lastName});
    };
    useEffect(() => {
        return () => {
            reset()
        }
    }, []);


    return (
        <form onSubmit={onCreateUser}>
            <input
                placeholder={'Last name'}
                value={success ? '' : lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <span>{error && error['last_name']}</span>
            <input
                placeholder={'First name'}
                value={success ? '' : firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <span>{error && error['first_name']}</span>
            <button type={'submit'}>Add user</button>
            <span>{loading && 'mentes...'} </span>
            <span>{success && 'siker'}</span>
        </form>
    )
};

export default AddUser;