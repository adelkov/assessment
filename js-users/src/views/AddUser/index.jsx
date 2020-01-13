import React, {useState} from 'react';
import * as API from "../../util/API";
import UserForm from "../../components/UserForm";

const Index = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const save = async (user) => {
        setLoading(true);
        try {
            await API.addUser({...user, status: 'active'});
            setLoading(false)
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