import React, {useEffect, useState} from 'react';

const UserForm = ({user, save, error}) => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        if (user) {
            setLastName(user.last_name);
            setFirstName(user.first_name);
        }
    }, [user]);

    const onSave = (e) => {
        e.preventDefault();
        save({
            first_name: firstName,
            last_name: lastName
        });
    };

    return (
        <form onSubmit={onSave}>
            <input
                placeholder={'Last name'}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <span>{error && error['last_name']}</span>
            <input
                placeholder={'First name'}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <span>{error && error['first_name']}</span>
            <button type={'submit'}>Save</button>
        </form>
    )
};

export default UserForm;