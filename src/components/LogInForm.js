import React, { useState } from 'react'
import HomePage from "../pages/homePage"
import "./LogIn.css"
import { useDispatch } from 'react-redux'
import { logInRequest } from "../actions/authAction"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const LogInForm = () => {

    const dispatch = useDispatch();
    const [values, setValues] = useState({ email: "", password: "" })
    const [user, setUser] = useState(values)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }
    const history = useHistory();
    const { authenticate } = useSelector(state => state.loggInReducer)
    if (authenticate === true) {
        history.push('/homepage')
    }

    const onFormSubmmit = async e => {
        e.preventDefault()
        validateForm()

        dispatch(logInRequest(values))
        console.log(values)

    }

    const validateForm = () => {



        // else if (values.username.match(/^[a-zA-Z]+$/)) {
        //     setUsername('Please write letters only')

        // }
        if (values.email === '') {
            setEmail('Please add your email address')
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            setEmail('Invalid Email Address')

        }
        if (values.password.length === '') {
            setPassword('Please type your password')
        } else if (values.password.length < 6) {
            setPassword('Minimum 6 charachters!')
        }


    }

    return (
        <div className='login_cnt'>
            <form className="login_form" onSubmit={onFormSubmmit}>
                <label>Enter Your Email</label>
                <input name='email' value={values.email} onChange={onInputChange} type='email' placeholder='enter your email' />
                <label>Enter Your Password</label>
                <input name='password' value={values.password} onChange={onInputChange} type='password' placeholder='enter your password' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LogInForm
