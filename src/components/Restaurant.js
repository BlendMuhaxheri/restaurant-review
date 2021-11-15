import React, { useState, useEffect } from 'react'
import Edit from "./Edit"
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { getReviews } from '../actions/restaurantsAction'
import { deleteRestaurant } from "../actions/restaurantsAction"
import { updateRestaurant } from '../actions/restaurantsAction'
import { getRestaurants } from '../actions/restaurantsAction'
import { restaurantReview } from '../actions/restaurantsAction'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "../helpers/axios"
import "./Restaurant.css"
import { Link } from 'react-router-dom'
import { Rating, RatingView } from 'react-simple-star-rating'
import { Card, ListGroup, Container, Col, Row } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

const Restaurant = ({ title, description, id }) => {
    const [rating, setRating] = useState(0)
    const [values, setValues] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleRating = (rate) => {
        setRating(rate)

    }
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const handleEdit = () => {
        history.push(`/restaurant/${id}`)
        console.log(id)
    }
    const objValues = {
        date,
        values,
        rating,
        id
    }
    const handleComments = () => {
        dispatch(restaurantReview(objValues))
    }
    const handleDelete = () => {
        dispatch(deleteRestaurant(id))
            .then(() => { dispatch(getRestaurants()) })

    }

    useEffect(() => {
        dispatch(getReviews(id))
    }, [])
    return (

        <>
            <Container>
                <Card style={{ width: '38rem', height: '250px', margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card.Title>
                        <div className='content-div'>
                            <h1>
                                {title}
                            </h1>
                            <FaEdit style={{ color: 'blue' }} onClick={handleEdit} />
                            <BsFillTrashFill style={{ color: 'red' }} onClick={handleDelete} />
                        </div>
                    </Card.Title>

                    <Card.Body>
                        <Card.Title style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
                            <input onChange={(e) => setValues(e.target.value)} type='text' placeholder='leave a comment' />
                            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                            <Button onClick={handleComments} size="sm" class="btn btn-outline-primary mr-xl-5 w-100">Leave a comment</Button>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </>

    )
}

export default Restaurant;
