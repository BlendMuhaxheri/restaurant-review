import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { getRestaurants } from "../actions/restaurantsAction"
import { createRestaurants } from "../actions/restaurantsAction"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./NewRestaurant.css"

const NewRestaurant =()=>{
    const dispatch = useDispatch();
    const history=useHistory()
    const [values, setValues] = useState({ name: "", description: "" })

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }
    console.log(values)
    const handleCreateButton=()=>{
        dispatch(createRestaurants(values))
        setValues({name:"",description:""})
        history.push('/restaurants')
    }
    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    return (
        <>
        <Form className='form-group'>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control value={values.name} name='name' onChange={onInputChange} type="text" placeholder="Title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder='Description' type='text' name='description' value={values.description} onChange={onInputChange} as="textarea" rows={3} />
    <Button onClick={handleCreateButton}>Create Restaurant</Button>
  </Form.Group>
 

</Form>
        </>
    )
}

export default NewRestaurant;