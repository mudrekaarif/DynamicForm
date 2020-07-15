import React from 'react';

const DropDownSelect = ({ reference, name, required, values, placeholder, changeHandler, errors }) => {
    return (
        <div>
            <label>{placeholder}</label>
            <br />
            <select className='but' name={name} required={required} onChange={changeHandler} ref={reference}>
                <option value="">Select an option</option>
                {values.map(values => <option value={values} key={values}>{values}</option>)}
            </select>
            {errors[name] === undefined ? null : <p style={{ color: 'red' }}>{errors[name].message}</p>}
        </div>
    );
}
export default DropDownSelect;