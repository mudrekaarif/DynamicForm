import React from 'react';

const InputText = ({ reference, name, placeholder, changeHandler, errors }) => {
    return (
        <div>
            <input
                className='but'
                type='text'
                name={name}
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