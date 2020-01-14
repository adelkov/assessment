import React from "react";

const TextInput = ({name, error, value, onChange}) => {
    return (
        <div className={'form__group'}>
            {error && error[name] && <label htmlFor={name}>{error[name]}</label>}
            <input
                className={`form__input ${error && error[name] && 'form__input--invalid'}`}
                id={name}
                placeholder={displayName(name)}
                value={value}
                onChange={onChange}
            />
            <label
                className={'form__label'}
                htmlFor={name}>{error && error[name] ? error[name] : displayName(name)}</label>
        </div>
    )
};

export default TextInput;

const displayName = name => {
    name = name.replace('_', ' ');
    return name.charAt(0).toUpperCase() + name.slice(1);
};