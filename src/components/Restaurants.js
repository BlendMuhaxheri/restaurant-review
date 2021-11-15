import React, { useEffect } from 'react'
import "./Restaurants.css"
import Restaurant from './Restaurant'
import { useDispatch,useSelector } from 'react-redux'
import { getRestaurants } from "../actions/restaurantsAction"


const Restaurants = () => {
    const { restaurants } = useSelector(state => state.restaurantsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRestaurants())
    }, [])
    return (
        <div className='restaurants_container'>
            <table>
                <thead><h1>Restaurants</h1></thead>
                <tbody>
                    {
                        restaurants.map(restaurant => <tr className='row'><Restaurant  title={restaurant?.name} id={restaurant?.id} /></tr>)

                    }
                </tbody></table>

        </div>
    )
}

export default Restaurants
