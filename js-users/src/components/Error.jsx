import React from "react";

const Error = () => {
    return (
        <div className={'error'}>
            <h1 className={'heading--secondary'}>Something went wrong...</h1>
            <a className={'error__back'} href="/users/1">Go back to user list</a>
        </div>
    )
};

export default Error;