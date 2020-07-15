import React from 'react';

const DropDownSelect = ({ name, required, val, placeholder, changeHandler }) => {
    return (
        <div>
            <label>{placeholder}</label>
            <br />
            <select className='but' name={name} required={required} onChange={changeHandler}>
                <option value="">Select an option</option>
                {val.map(values => <option value={values} key={values}>{values}</option>)}
            </select>
        </div>
    );
}

export default DropDownSelect;