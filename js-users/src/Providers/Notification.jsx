import React, {useState} from "react";

export const NotificationContext = React.createContext({});

export const NotificationProvider = (props) => {

    const TIMEOUT = 3000;
    const [message, setMessage] = useState(null);
    const setNotification = (message) => {
        setMessage(message);
        setTimeout(() => {
            setMessage(null)
        }, TIMEOUT)
    };

    return (
        <NotificationContext.Provider
            value={{
                message,
                setNotification
            }}
        >
            {props.children}
        </NotificationContext.Provider>
    )
};