import * as actionTypes from "../actionTypes";

const initialState = {
    token: null,
    user: {}
}

const userReducer = (state = initialState, action) => {
    const {token, user} = {...action?.payload};
    

    switch(action.type) {
        case actionTypes.UPDATE_USER:
        case actionTypes.OUTH_SIGN_UP:{
            return{
                ...state, token, user
            }
        }
        case actionTypes.UPDATE_LANGUAGE:{
            return{
             ...state,
             user:{
                 ...state.user,
                 lang: action.payload
             }
            }
        }
        case actionTypes.CLEAR_USER:{
            return initialState;
        }
        default: {
            return state;
        }
    }

}

export default userReducer;