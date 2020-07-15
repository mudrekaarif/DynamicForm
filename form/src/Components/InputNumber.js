import React from 'react';

const InputNumber = ({ name, required, placeholder, changeHandler, validation }) => {
    return (
        <div>
            <input
                className='but'
                type='number'
                name={name}
                min={validation.min}
                max={validation.max}
                required={required}
                autoComplete='off'
                placeholder={placeholder}
                onChange={changeHandler}
            />
        </div>
    );
}

export default InputNumber;