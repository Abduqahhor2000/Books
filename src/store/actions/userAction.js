import * as actionType from "../actionTypes";

export const updateLangAction = (lang) => {
    return {
        lang,
        type: actionType.UPDATE_LANGUAGE
    }
}
export const updateUserAction = ({token, user}) => {
    return {
        payload: {token, user},
        type: actionType.UPDATE_USER
    }
}
export const clearUserAction = () => {
    return {
        type: actionType.CLEAR_USER
    }
}