import { authConstants } from "../constants/constants"

const initState = {
    comments: [],
    loading: false,


}

const replyReducer = (state = initState, action) => {
    switch (action.type) {
        case authConstants.COMMENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case authConstants.COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.payload.comments]
            }
        case authConstants.COMMENT_FAILURE:
            return {
                ...state,
                loading: false
            }



    }
    return state;
}

export default replyReducer;