import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function CreatePost() {

    const [state, setState] = useState({
        body: "",
        title: "",
        photo: ""
    })
    const [errors, setErrors] = useState('')
    const history = useHistory()

    //FORM HANDLERS
    const handleInputs = e => setState({...state, [e.target.name]:e.target.value})
    const handleUpload = async e => {
            const formData = new FormData()
            formData.append("upload_preset", "instasim");
            formData.append("cloud_name", "simdeveloper");
            formData.append("file", e.target.files[0]);

            axios.post('https://api.cloudinary.com/v1_1/simdeveloper/image/upload', formData)
            .then(res => setState({...state, photo: res.data.url}))
            .catch(err => console.log('cloudinary', err))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(state.photo !== '' && state.title !== "" && state.body !== ""){

            setErrors("")

            const authHeaders = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                }
            }
            axios.post('/create-post', state, authHeaders).then(res => console.log(res.data))
            .catch(err => console.log(err))
            setErrors("")
            history.push('/')

        }else{
            setErrors("All fields are required - React")
        }         
    } 
    
    return (
        <section className="form-wrapper">
            <h1>Create your post</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="title">
                    <input type="text" name="title" id="title" placeholder="Post title" onChange={handleInputs} />
                </label>
                <label htmlFor="password">
                    <input type="text" name="body" id="body" placeholder="Post body" onChange={handleInputs} />
                </label>
                <label htmlFor="password">
                    <input type="file" name="photo" id="photo" onChange={handleUpload} />
                </label>
                {
                    errors !== '' && <p className="errors">{errors}</p>
                }
                <button>Create Post</button>
            </form>
        </section>
    )
}

export default CreatePost
