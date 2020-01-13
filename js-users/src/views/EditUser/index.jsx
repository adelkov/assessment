import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import * as API from '../../util/API'
import UserForm from "../../components/UserForm";
import {NotificationContext} from "../../Providers/Notification";

const Index = () => {
    const {userId} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {setNotification} = useContext(NotificationContext);


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {data} = await API.fetchUser(userId);
                setUser(data);
                setLoading(false)
            } catch (error) {
                setError(error);
                setLoading(false)
            }
        };
        fetchUser()
    }, [userId]);

    const save = async (user) => {
        setLoading(true);
        try {
            await API.updateUser({...user, id: userId});
            setUser(user);
            setLoading(false);
            setNotification('saved')

        } catch (e) {
            setError(e.response.data);
            setLoading(false)
        }
    };

    return (
        <div>Edit User
            {loading ? <div>...loading</div> : <UserForm save={save} error={error} user={user}/>}
        </div>
    )
};

export default Index;