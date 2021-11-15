import { authConstants } from "../constants/constants"
import axios from "../helpers/axios"

export const replyComment = (comments) => async (dispatch) => {
    dispatch({ type: authConstants.COMMENT_REQUEST })
    axios
        .post('/auth/reply', { ...comments })
        .then(res => {
            console.log(res.data)

            dispatch({
                type: authConstants.COMMENT_SUCCESS,
                payload: {
                    comments
                }

            })

        })

}