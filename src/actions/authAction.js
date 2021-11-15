import { authConstants } from "../constants/constants"
import axios from "../helpers/axios"

// const user = {
//     username,
//     password
// }

export const logInRequest = (user) => async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST })
    axios
        .post('/auth/login', { ...user })
        .then(res => {
            const { token, user } = res.data
            localStorage.setItem("token", token);
            // localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem('role', user.role)
            console.log(res.data)
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    user,
                    token
                }
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: err
                },
            })


        })
}

export const signOut = () => async (dispatch) => {
    dispatch({ type: authConstants.SIGN_OUT_REQUEST_SUCCESS })
    localStorage.clear();

}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            });
        }
    }
}
