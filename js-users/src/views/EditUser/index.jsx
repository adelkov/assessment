import React, {useState, useEffect, useContext} from 'react';
import {useParams, useHistory} from "react-router-dom";
import * as API from '../../util/API'
import UserForm from "../../components/UserForm";
import {NotificationContext} from "../../Providers/Notification";

const Index = () => {
    const {userId} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {setNotification} = useContext(NotificationContext);
    const history = useHistory();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {data} = await API.fetchUser(userId);
                setUser(data);
                setLoading(false)
            } catch (error) {
                history.push('/users/1');
            }
        };
        fetchUser()
    }, [userId, history]);

    const save = async (user) => {
        setLoading(true);
        try {
            await API.updateUser({...user, id: userId});
            setUser(user);
            setLoading(false);
            setNotification('Saved')
        } catch (e) {
            setError(e.response.data);
            setLoading(false)
        }
    };

    return (
        <UserForm save={save} loading={loading} error={error} user={user} title={'Edit user'}/>
    )
};

export default Index;