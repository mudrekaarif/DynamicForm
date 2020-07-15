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

    const [inp, setinp] = useState({});
    const [valid_, setvalid_] = useState({});

    const submitHandler = (data) => {
        console.log(input)
        alert('SUBMITTED, check console');

    }
    const changeHandler = (event, pattern) => {
        let valid = true;
        if (pattern) {
            var re = new RegExp(pattern);
            let result = event.currentTarget.value.match(re);
            if (!result) valid = false;
            else if (result[0] === event.currentTarget.value) {
                valid = true;
            }
            else valid = false;
        }
        setinp({ ...inp, [event.currentTarget.name]: event.currentTarget.value }, InputChangeHandler(inp))
        setvalid_({ ...valid_, [event.currentTarget.name]: valid })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)} >
                {
                    feilds.map(form => {
                        if (typeof fmap[form.input_type] !== "undefined") {
                            let show = true;
                            if (form.dependent) {
                                for (let i = 0; i < form.dependent.length; i++) {
                                    if (valid_[form.dependent[i]] === undefined || valid_[form.dependent[i]] === false) show = false;
                                }
                            }
                            if (!show) return null;
                            return React.createElement(fmap[form.input_type], {
                                ...form,
                                reference: register(form.validation),
                                key: form.name,
                                changeHandler: (e) => changeHandler(e, form.validation.pattern),
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