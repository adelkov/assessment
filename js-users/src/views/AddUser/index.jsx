import React, {useContext, useState} from 'react';
import * as API from "../../util/API";
import UserForm from "../../components/UserForm";
import {NotificationContext} from "../../Providers/Notification";

const Index = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {setNotification} = useContext(NotificationContext);

    const save = async (user) => {
        setLoading(true);
        try {
            await API.addUser({...user, status: 'active'});
            setLoading(false);
            setNotification('Successfully added user')
        } catch (e) {
            setError(e.response.data);
            setLoading(false)
        }
    };

    return (
        <div>Add User
            {loading ? <div>...loading</div> : <UserForm save={save} error={error}/>}
        </div>
    );
};

export default Index;