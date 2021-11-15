import React, { useState } from 'react'
import "./HomePage.css"
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from "jwt-decode"
import { useHistory } from "react-router-dom"
import { Redirect } from "react-router"
import { signOut } from '../actions/authAction'


const HomePage = () => {

    const history = useHistory();
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)
    const { user, token, decoded } = useSelector(state => state.loggInReducer)
    // console.log(user)
    const handleLogOut = () => {
        dispatch(signOut())
        history.push('/login')
    }



    // console.log(decoded)
    const buttonHandler = () => {
        history.push('/owner')
    }
    const costumerHandler = () => {
        history.push('/costumer')
    }

    return (
        <div className='homepage_cnt'>
            <div className='homepage_nav'>
                {
                    decoded && decoded.role === 'owner' && (
                        <div><button className='owner-button' onClick={buttonHandler}>Redirect to   Owner</button></div>
                    )
                }
                {
                    decoded && decoded.role === 'costumer' && (
                        <div><button onClick={costumerHandler}>Redirect to   Costumer</button></div>
                    )
                }
            </div>
            <div className='homepage-lower_nav'>
                <h1>Welcome {decoded?.name?.toUpperCase()} !</h1>
            </div>
            {/* <div className='logout_div'> <button onClick={handleLogOut}>Log Out</button></div> */}



        </div>
    )
}

export default HomePage;
