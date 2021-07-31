import * as actionTypes from "../actionTypes";

export const signUpAction = (payload) => {
    return {
        payload,
        type: actionTypes.OUTH_SIGN_UP
    }
}