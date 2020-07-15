import * as actionTypes from './actionTypes';
import { Personal, Business } from '../Config/ConfigArray';
const initialState = {
    formType: 'Personal',
    feilds: Personal
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FORM_TYPE:
            if (action.formType === 'Personal') {
                return {
                    formType: 'Personal',
                    feilds: Personal
                }
            }
            else if (action.formType === 'Business') {
                return {
                    formType: 'Business',
                    feilds: Business
                }
            }
            return {
                ...state
            };
        case actionTypes.SET_INPUT_FEILDS:
            return {
                ...state,
                input: action.input
            }
        default:
            return state;
    }
}

export default Reducer;