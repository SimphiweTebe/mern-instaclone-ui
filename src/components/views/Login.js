import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link, useHistory } from 'react-router-dom'
import { getUser } from '../../redux/actions/userActions'
import axios from 'axios'

function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleInputs = e => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        try{
            const response = await axios.post('/login', user)
            // console.log(response.data);
            // document.cookie = `jwt=${response.data.token}`
            // document.cookie = `user=${response.data.token}` 
            localStorage.setItem('jwt', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            dispatch(getUser(response.data))
            history.push('/')
        }catch(res){
            await setErrors(res.response.data.error)
        }
    }  

    return (
        <section className="form-wrapper">
            <h1>Login to your account</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" placeholder="Your email" value={user.email} onChange={handleInputs}/>
                </label>
                <label htmlFor="password">
                    <input type="password" name="password" id="password" placeholder="Password" value={user.password} onChange={handleInputs} />
                </label>
                <button>Sign In</button>
                {
                    errors !== '' && <p className="errors">{errors}</p>
                }
                <h5>
                    <Link to="/signup">Don't have an account? Signup here</Link>
                </h5>
            </form>
        </section>
    )
}

export default Login
