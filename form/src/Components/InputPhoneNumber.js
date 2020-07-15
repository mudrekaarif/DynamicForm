import React from 'react';

const InputPhoneNumber = ({ reference, name, placeholder, changeHandler }) => {
    return (
        <div>
            <input
                className='but'
                type='text'
                name={name}
                pattern='[0-9]{10}'
                autoComplete='off'
                placeholder={placeholder}
                onChange={changeHandler}
                ref={reference}
            />
        </div>
    );
}
export default InputPhoneNumber;