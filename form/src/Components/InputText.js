import React from 'react';

const InputText = ({ reference, name, required, placeholder, changeHandler, validation, errors }) => {
    console.log(errors, name, errors[name] === undefined);
    return (
        <div>
            <input
                className='but'
                type='text'
                name={name}
                // pattern={validation.pattern}
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