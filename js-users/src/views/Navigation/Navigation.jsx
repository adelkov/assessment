import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {faPlus, faList} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NotificationContext} from "../../Providers/Notification";


const Navigation = () => {
    const {message} = useContext(NotificationContext);

    return (
        <div className={'nav'}>
            <NavLink to={'/new'}>
                <div className={'nav__btn nav__btn'}>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            </NavLink>
            <NavLink to={'/users/1'}>
                <div className={'nav__btn nav__btn'}>
                    <FontAwesomeIcon icon={faList}/>
                </div>
            </NavLink>
            {message && <div className={'nav__btn nav__btn--notification '}>{message}</div>}
        </div>
    )
};

export default Navigation
