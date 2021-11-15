import React, { useState } from 'react'
import "./SignUpForm.css"
import { useDispatch } from "react-redux"
import { signUpRequest } from "../actions/signUpAction"




const SignUpForm = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState({ name: "", email: "", password: "", role: "" })
    const handleInput = e => {

        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })

    }
    console.log(users)
    const handleForm = e => {
        e.preventDefault();
        dispatch(signUpRequest(users))
    }
    // const roleHandler = e => {
    //     setSelectedOption({
    //         [e.target.name]: e.target.value
    //     })

    // }
    // console.log(selectedOption)
    const validateForm = () => {
        if (users.username === '') {
            setUsername('please type your name')
        }
        // else if (values.username.match(/^[a-zA-Z]+$/)) {
        //     setUsername('Please write letters only')

        // }
        if (users.email === '') {
            setEmail('Please add your email address')
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(users.email)
        ) {
            setEmail('Invalid Email Address')

        }
        if (users.password.length === '') {
            setPassword('Can not be empty')
        } else if (users.password.length < 6) {
            setPassword('Password must be minimum 6 charachters!')
        }

    }

    return (

        <div className='signup_cnt'>

            <form className='from_cnt'>
                <label>Enter Your Username</label>
                <input onChange={handleInput} placeholder='enter your username' name='name' value={users.name} />
                {username && <p>{username}</p>}
                <label>Enter Your Email</label>
                <input onChange={handleInput} placeholder='enter your email' name='email' type='email' value={users.email} />
                {email && <p>{email}</p>}
                <label>Enter your password</label>
                <input onChange={handleInput} placeholder='enter your password' name="password" type='password' value={users.password} />
                {password && <p>{password}</p>}
                <div className='own_cnt'> <input onClick={handleInput} type="radio" value='owner' name="role" />Owner</div>
                <div>  <input onChange={handleInput} type="radio" name="role" value='user' /> User</div>
                <button onClick={handleForm}>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm
