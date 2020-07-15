import * as actionTypes from './actionTypes';
export const ChangeFormType = (type) => {
    return {
        type: actionTypes.SET_FORM_TYPE,
        formType: type
    };
};
export const SetInputFeilds = (input) => {
    return {
        type: actionTypes.SET_INPUT_FEILDS,
        input: input
    };
};