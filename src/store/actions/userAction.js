import * as actionType from "../actionTypes";

export const updateLangAction = (lang) => {
    return {
        payload: lang,
        type: actionType.UPDATE_LANGUAGE
    }
}
export const updateUserAction = () => {
    return {
        type: actionType.UPDATE_USER
    }
}
export const clearUserAction = () => {
    return {
        type: actionType.CLEAR_USER
    }
}