import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangeFormType } from './store/actions';
import DynamicForm from './Components/DynamicForm';
import './App.css';

class App extends Component {
  _formChangeHandler = (event) => {
    event.preventDefault();
    this.props.formChangeHandler(event.currentTarget.value);
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>Insurance type</h3>
        <div>
          <input
            className={this.props.formType === "Personal" ? 'active but' : 'but'}
            type="button"
            value="Personal"
            onClick={this._formChangeHandler} />
          <input
            className={this.props.formType === "Business" ? 'active but' : 'but'}
            type="button"
            value="Business"
            onClick={this._formChangeHandler} />
        </div>
        <DynamicForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formType: state.formType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formChangeHandler: (formType) => dispatch(ChangeFormType(formType))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);