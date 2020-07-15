import React, { useState } from 'react';
import { SetInputFeilds } from '../store/actions';
import fmap from '../Config/FeildMap';
import './form.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";

const DynamicForm = () => {
    // redux components
    const feilds = useSelector(state => state.feilds);
    const input = useSelector(state => state.input);
    const dispatch = useDispatch();
    const InputChangeHandler = (input) => dispatch(SetInputFeilds(input))

    const { register, handleSubmit, errors } = useForm();

    //state
    const [inp, setinp] = useState({});
    const [validFields, setValidFields] = useState({});

    const submitHandler = (data) => {
        console.log(data)
        alert('SUBMITTED, check console');

    }
    const changeHandler = (event, pattern) => {
        let valid = true;
        if (pattern && pattern.value) {
            let result = event.currentTarget.value.match(pattern.value);
            if (!result) valid = false;
            else if (result[0] === event.currentTarget.value) {
                valid = true;
            }
            else valid = false;
        }
        setinp({ ...inp, [event.currentTarget.name]: event.currentTarget.value }, InputChangeHandler(inp))
        setValidFields({ ...validFields, [event.currentTarget.name]: valid })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)} >
                {
                    feilds.map(feild => {
                        if (typeof fmap[feild.component] !== "undefined") {
                            let show = true;
                            if (feild.dependent) {
                                for (let i = 0; i < feild.dependent.length; i++) {
                                    if (validFields[feild.dependent[i]] === undefined || validFields[feild.dependent[i]] === false) show = false;
                                }
                            }
                            if (!show) return null;
                            return React.createElement(fmap[feild.component], {
                                ...feild,
                                reference: register({ ...feild.validation }),
                                key: feild.name,
                                changeHandler: (e) => changeHandler(e, feild.validation.pattern),
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