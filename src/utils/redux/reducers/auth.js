import actionTypes from "../actionTypes"


const initialState = {
    isSignIn: false,
    isSignUp: false,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.IS_SIGNIN:
            return({
                ...state,
                isSignIn: action.payload
            })
        case actionTypes.IS_SIGNUP:
            return({
                ...state,
                isSignUp: action.payload
            })
        case actionTypes.SET_USER:
            return ({
                ...state,
                isSignIn: false,
                isSignUp: false,
                user: action.payload
            })
        default:
            return state
    }
}

export default authReducer