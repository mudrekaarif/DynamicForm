import React, { useState } from 'react';
import { SetInputFeilds } from '../store/actions';
import fmap from '../Config/FeildMap';
import './form.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";

const DynamicForm = () => {
    const feilds = useSelector(state => state.feilds);
    const input = useSelector(state => state.input);
    const dispatch = useDispatch();
    const InputChangeHandler = (input) => dispatch(SetInputFeilds(input))


    const { register, handleSubmit, errors } = useForm();

    const [inp, setinp] = useState([]);

    const submitHandler = (data) => {
        console.log(input)
        alert('SUBMITTED, check console');

    }
    const changeHandler = (event) => {
        setinp({ ...inp, [event.currentTarget.name]: event.currentTarget.value }, InputChangeHandler(inp))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)} >
                {
                    feilds.map(form => {
                        if (typeof fmap[form.input_type] !== "undefined") {
                            return React.createElement(fmap[form.input_type], {
                                ...form,
                                reference: register(form.validation),
                                key: form.name,
                                changeHandler: changeHandler,
                                errors: errors
                            });
                        }
                        else return null;
                    })
                }
                <hr style={{ width: 400 }} />
                <input className='but' type='submit' value='Continue' />
            </form>
        </div>
    );
}

export default DynamicForm;