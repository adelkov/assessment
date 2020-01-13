import React, {useContext} from "react";
import {NotificationContext} from "../Providers/Notification";

const Notification = () => {
    const {message} = useContext(NotificationContext);
    if (!message) {
        return null
    }
    return (
        <div>{message}</div>
    )
};

export default Notification;