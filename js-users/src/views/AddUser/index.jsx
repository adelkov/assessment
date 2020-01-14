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
            setNotification('Added')
        } catch (e) {
            setError(e.response.data);
            setLoading(false)
        }
    };

    return (
        <UserForm loading={loading} save={save} error={error} title={'Add user'}/>
    );
};

export default Index;