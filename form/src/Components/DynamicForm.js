import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from './InputText';
import InputNumber from './InputNumber';
import DropDownSelect from './DropDownSelect';
import { SetInputFeilds } from '../store/actions';
import './form.css';

class DynamicForm extends Component {
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.props.input)
        alert('SUBMITTED, check console');

    }
    changeHandler = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        }, () => {
            this.props.InputChangeHandler(this.state);
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} >
                    {
                        this.props.feilds.map(form => {
                            if (form.input_type === 'text') {
                                return (
                                    <InputText
                                        name={form.name}
                                        placeholder={form.placeholder}
                                        required={form.required}
                                        key={form.name}
                                        changeHandler={this.changeHandler}
                                        validation={form.validation}
                                    />
                                )
                            }
                            else if (form.input_type === 'number') {
                                return (
                                    <InputNumber
                                        name={form.name}
                                        placeholder={form.placeholder}
                                        required={form.required}
                                        key={form.name}
                                        changeHandler={this.changeHandler}
                                        validation={form.validation}
                                    />
                                )
                            }
                            else if (form.input_type === 'select') {
                                return (
                                    <DropDownSelect
                                        name={form.name}
                                        required={form.required}
                                        val={form.values}
                                        placeholder={form.placeholder}
                                        changeHandler={this.changeHandler}
                                        key={form.name}
                                    />
                                )
                            }
                            else if (form.input_type === 'display_text') {
                                return (
                                    <label key={form.name}>{form.placeholder}</label>
                                )
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
}

const mapStateToProps = (state) => {
    return {
        feilds: state.feilds,
        input: state.input
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        InputChangeHandler: (input) => dispatch(SetInputFeilds(input))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DynamicForm);