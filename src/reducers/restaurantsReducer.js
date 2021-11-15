import { authConstants } from "../constants/constants"

const initState = {
    restaurants: [],
    fetching: false,
    error: "",
    creating: false,
    deleting: false,
    updating: false,
    comments: [],
    commenting: false



}

const restaurantsReducer = (state = initState, action) => {
    switch (action.type) {
        case authConstants.GET_RESTAURANTS_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case authConstants.GET_RESTAURANTS_SUCCESS:
            return {
                ...state,
                fetching: false,
                restaurants: action.payload.restaurants
            };
        case authConstants.GET_RESTAURANTS_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload.error
            }
        case authConstants.CREATE_RESTAURANT_REQUEST:
            return {
                ...state,
                creating: true
            }
        case authConstants.CREATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                creating: false,
                restaurants: [...state.restaurants, action.payload.restaurants]
            }
        case authConstants.CREATE_RESTAURANT_FAILURE:
            return {
                creating: false,
                error: action.payload.error
            }
        case authConstants.UPDATE_RESTAURANT_REQUEST:
            return {
                ...state,
                updating: true
            }
        case authConstants.UPDATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                updating: false,
                //    restaurants:[state.restaurants.map((restaurant)=>restaurant.id === action.payload.restaurants._id ? action.payload.restaurants : restaurant

                // )]
            }
        case authConstants.DELETE_RESTAURANT_REQUEST:
            return {
                ...state,
                deleting: true
            }
        case authConstants.DELETE_RESTAURANT_SUCCESS:
            return {
                ...state,
                deleting: false,


            }

        case authConstants.COMMENT_REQUEST:
            return {
                ...state,
                commenting: true
            }
        case authConstants.COMMENT_REQUEST_SUCCESS:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        case authConstants.COMMENT_REQUEST_FAILURE:
            return {
                ...state,
                commenting: false,
                error: action.payload.error
            }



    }
    return state;
}

export default restaurantsReducer;