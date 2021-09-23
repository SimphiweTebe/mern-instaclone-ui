import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <section className="form-wrapper">
            <h1>Instaclone</h1>
            <form className="form">
                <label htmlFor="email">
                    <input type="email" name="email" id="email" placeholder="Your email" />
                </label>
                <label htmlFor="password">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </label>
                <button>Sign In</button>
                <h5>
                    <Link to="/signup">Don't have an account? Signup here</Link>
                </h5>
            </form>
        </section>
    )
}

export default Login
