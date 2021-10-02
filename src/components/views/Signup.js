import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const history = useHistory()

    const [state, setState] = useState({
        name: '',
        password: '',
        email: ''
    })
    const [errors, setErrors] = useState('')

    const handleChange = e => {
        setState({...state, [e.target.name] : e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        
        try{
            await axios.post('/signup', state)
            history.push('/login')
            
        }catch(res){
            await setErrors(res.response.data.error)
        }
    }  
    
    return (
        <section className="form-wrapper">
            <h1>Create your new account</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input type="text" name="name" id="name" placeholder="Username" value={state.name} onChange={handleChange} />
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" placeholder="Email" value={state.email} onChange={handleChange} />
                </label>
                <label htmlFor="password">
                    <input type="password" name="password" id="password" placeholder="Password" value={state.password} onChange={handleChange} />
                </label>
                <button>Sign Up</button>
                {
                    errors !== '' && <p className="errors">{errors}</p>
                }
                <h5>
                    <Link to="/login">Already have an account? Login here</Link>
                </h5>
            </form>
            
        </section>
    )
}

export default Signup
