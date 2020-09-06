import { authActionTypes } from './auth.actionTypes';


const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    authenticating: false,
    authenticated: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case `${authActionTypes.USER_LOGIN}_REQUEST`:
            return {
                ...state,
                authenticating: true
            }

        case `${authActionTypes.USER_LOGIN}_SUCCESS`:
            return {
                ...state,
                ...action.payload.user,
                authenticating: false,
                authenticated: true
            }


        case `${authActionTypes.USER_LOGIN}_FAILURE`:
            return {
                ...state,
                error: action.payload.error,
                authenticating: false,
                authenticated: false
            }

        case `${authActionTypes.USER_LOGOUT}_REQUEST`:
        case `${authActionTypes.USER_LOGOUT}_SUCCESS`:
            return {
                ...initialState
            }
        case `${authActionTypes.USER_LOGOUT}_FAILURE`:
            return {
                ...state,
                error: action.payload.error
            }


        default:
            return state
    }
}
export default authReducer