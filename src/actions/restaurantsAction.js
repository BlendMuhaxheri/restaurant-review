import { authConstants } from "../constants/constants"
import axios from "../helpers/axios"

export const getRestaurants = () => async (dispatch) => {

    dispatch({ type: authConstants.GET_RESTAURANTS_REQUEST })
    axios
        .get('/restaurants/list')
        .then(res => {
            console.log(res.data)
            dispatch({
                type: authConstants.GET_RESTAURANTS_SUCCESS,
                payload: {
                    restaurants: res.data.restaurants,

                }
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: authConstants.GET_RESTAURANTS_FAILURE,
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
};

export const createRestaurants = (values) => async (dispatch) => {
    dispatch({ type: authConstants.CREATE_RESTAURANT_REQUEST })
    axios
        .post("/restaurants", { ...values })
        .then(res => {
            const { restaurants } = res.data
            console.log(res.data)
            dispatch({
                type: authConstants.CREATE_RESTAURANT_SUCCESS,
                payload: {
                    restaurants
                }
            })
            dispatch(getRestaurants())
        })
    // .catch((err) => {
    //     console.log(err)
    //     dispatch({
    //         type: authConstants.CREATE_RESTAURANT_FAILURE,
    //         payload: {
    //             error: err
    //         }
    //     })
    // }



}

export const updateRestaurant = (id, values) => async (dispatch) => {
    dispatch({ type: authConstants.UPDATE_RESTAURANT_REQUEST })
    axios.patch(`/restaurants/${id}`, { ...values })
        .then(res => {
            const { restaurants } = res.data
            console.log(res.data)
            dispatch({
                type: authConstants.UPDATE_RESTAURANT_SUCCESS,
                // payload:{
                //  restaurants :res.data.restaurants
                // }
            })
        })
}

export const deleteRestaurant = (id) => async (dispatch) => {
    dispatch({ type: authConstants.DELETE_RESTAURANT_REQUEST })
    axios.delete(`/restaurants/${id}`)
        .then(res => {
            const { id } = res.data

            console.log(res.data)
            dispatch({
                type: authConstants.DELETE_RESTAURANT_SUCCESS,
                payload: {
                    id,
                }
            })
        })




}
export const restaurantReview = (objValues) => async (dispatch) => {
    dispatch({ type: authConstants.COMMENT_REQUEST })
    axios.post(`/restaurants/`, { comment: objValues.values, rating: objValues.rating, visited_at: objValues.date })
        .then(res => {
            dispatch({
                type: authConstants.COMMENT_REQUEST_SUCCESS,
                payload: res.data.reivew


            })

        })
        .catch((err) => {
            dispatch({
                type: authConstants.COMMENT_REQUEST_FAILURE,
                payload: {
                    error: err
                },
            })
            console.log(err.message)


        })


}

export const getReviews = (id) => async (dispatch) => {
    dispatch({ type: authConstants.GET_REVIEW_REQUEST })
    axios.get(`/review/${id}`)
        .then(res => {
            console.log(res.data)

        })
    console.log(id)

}