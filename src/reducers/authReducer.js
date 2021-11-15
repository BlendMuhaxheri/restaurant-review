import { authConstants } from "../constants/constants"
import jwt_decode from "jwt-decode"


const initialState = {
    token: null,
    user: {},
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
    decoded: null,
    signingOut: false

}

const loggInReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true,
                loading: true
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true,
                authenticating: false,
                loading: false,
                decoded: jwt_decode(action.payload.token),



            };
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case authConstants.SIGN_OUT_REQUEST:
            return {
                ...state,
                signingOut: true
            };
        case authConstants.SIGN_OUT_REQUEST_SUCCESS:
            return {
                ...state,
                signingOut: false,
                authenticate: false
            }



    }
    return state
}
export default loggInReducer;