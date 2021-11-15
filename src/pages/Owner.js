import React, { useState, useEffect } from 'react'
import Restaurant from '../components/Restaurant'
import "../components/Owner.css"
import { getRestaurants } from "../actions/restaurantsAction"
import { createRestaurants } from "../actions/restaurantsAction"
import axios from '../helpers/axios'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from "react-router"
import { useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
const Owner = () => {
    const [values, setValues] = useState({ name: "", description: "" })
    const { restaurants } = useSelector(state => state.restaurantsReducer)
    const dispatch = useDispatch();
    const [button, setButton] = useState("Create Restaurant")
    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }

    const handleButton = () => {
        dispatch(createRestaurants(values))
        setValues({name:"",description:""})
        // dispatch(getRestaurants())


    }




    useEffect(() => {
        dispatch(getRestaurants())
    }, [])


    return (
        <div className='owner_cnt'>

            <div>
                <div> <input type='text' name='name' value={values.name} onChange={onInputChange} placeholder='Please enter a name' />Name</div>
                <div> <input type='text' name='description' value={values.description} onChange={onInputChange} placeholder='Please enter a description' />Description</div>
                {/* <button onClick={handleButton}>{button}</button> */}
                <Button onClick={handleButton}>{button}</Button>

            </div>
            <table>
                {/* <thead><h1>Restaurants</h1></thead> */}
                <tbody>
                    {
                        restaurants.map(restaurant => <tr className='row'><Restaurant values={values} title={restaurant?.name} id={restaurant?.id} description={restaurant?.description} /></tr>)

                    }
                </tbody></table>





        </div>
    )
}

export default Owner
