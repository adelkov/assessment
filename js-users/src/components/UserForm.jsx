import React, {useEffect, useState} from 'react';
import TextInput from "./TextInput";

const UserForm = ({user, save, error, title, loading}) => {
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
        <div className={'user-form'}>
            <form onSubmit={onSave} className={'user-form__form'}>
                <h2 className={'heading-secondary'}>{title}</h2>
                <TextInput
                    error={error}
                    name={'first_name'}
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />
                <TextInput
                    error={error}
                    name={'last_name'}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
                <div className={'form__group'}>
                    <button className={'btn btn--green'} type={'submit'}>{loading ? 'loading' : 'Save'}</button>
                </div>
            </form>
        </div>
    )
};

export default UserForm;