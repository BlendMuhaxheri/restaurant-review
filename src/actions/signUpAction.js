
import { authConstants } from "../constants/constants"
import axios from "../helpers/axios"


export const signUpRequest = (user) => async (dispatch) => {
    dispatch({ type: authConstants.SIGNUP_REQUEST })
    axios
        .post('/auth/register', { ...user })
        .then(res => {
            console.log(res.data)
            dispatch({
                type: authConstants.SIGNUP_SUCCESS,
                payload: {
                    user,

                }
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: authConstants.SIGNUP_FAILURE,
                payload: {
                    error: err
                },
            })
            // swal(`Something went wrong`, `Please try again`, "warning", {
            //     buttons: {
            //         OK: true,
            //     },

            // });

        })
}

