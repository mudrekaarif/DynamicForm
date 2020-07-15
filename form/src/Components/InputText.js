import React from 'react';

const InputText = ({ reference, name, required, placeholder, changeHandler, validation }) => {
    return (
        <div>
            <input
                className='but'
                type='text'
                name={name}
                pattern={validation.pattern}
                required={required}
                autoComplete='off'
                placeholder={placeholder}
                onChange={changeHandler}
                ref={reference}
            />
        </div>
    );
}

export default InputText;