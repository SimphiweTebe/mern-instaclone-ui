import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <section className="form-wrapper">
            <h1>Instaclone</h1>
            <form className="form">
                <label htmlFor="name">
                    <input type="email" name="name" id="name" placeholder="Your username" />
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" placeholder="Your email" />
                </label>
                <label htmlFor="password">
                    <input type="password" name="password" id="password" placeholder="Password" />
                </label>
                <button>Sign Up</button>
                <h5>
                    <Link to="/login">Already have an account? Login here</Link>
                </h5>
            </form>
            
        </section>
    )
}

export default Signup
