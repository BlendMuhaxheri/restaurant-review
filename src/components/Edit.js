import React, { useState, useEffect } from 'react'
import axios from '../helpers/axios'
import { useSelector, useDispatch } from 'react-redux'
import { getRestaurants, updateRestaurant } from '../actions/restaurantsAction'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'


const Edit = () => {
    const history = useHistory()
    const { id } = useParams()
    const dispatch = useDispatch()
    const [values, setValues] = useState({ name: "", description: "" })
    const [description, setDescription] = useState('')


    const loadRestaurants = async () => {
        const { data } = await axios.get(`/restaurants/${id}`);


        console.log(data)
    }
    useEffect(() => {
        loadRestaurants()

    }, [])
    const handleButton = (id, values) => {
        dispatch(updateRestaurant(id, values))
            .then(() => { dispatch(getRestaurants()) })

        history.push('/restaurants')
    }
    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }
    console.log(values)


    return (
        <div><input type='text' name="name" placeholder='update name' value={values.name} onChange={onInputChange} />
            <input type='text' name="description" value={values.description} placeholder='update description' onChange={onInputChange} />
            <button onClick={() => handleButton(id, values)} >Update</button>
        </div>

    )
}

export default Edit;