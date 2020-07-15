import React from 'react';

const InputText = ({ name, required, placeholder, changeHandler, validation }) => {
    return (
        <div>
            <input
                className='but'
                type='text'
                name={name}
                pattern={validation}
                required={required}
                autoComplete='off'
                placeholder={placeholder}
                onChange={changeHandler}
            />
        </div>
    );
}

export default InputText;