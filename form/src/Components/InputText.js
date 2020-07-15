import React from 'react';

const InputText = ({ reference, name, required, placeholder, changeHandler, validation, errors }) => {
    return (
        <div>
            <input
                className='but'
                type='text'
                name={name}
                required={required}
                autoComplete='off'
                placeholder={placeholder}
                onChange={changeHandler}
                ref={reference}
            />
            {errors[name] === undefined ? null : <p style={{ color: 'red' }}>{errors[name].message}</p>}
        </div>
    );
}

export default InputText;