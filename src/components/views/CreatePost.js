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
    const handleUpload = e => setState({...state, [e.target.name]:e.target.files[0] })
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData()
        formData.append("upload_preset", "instasim");
        formData.append("cloud_name", "simdeveloper");
        formData.append("file", state.photo);

        try{
            const imageURL = await axios.post('https://api.cloudinary.com/v1_1/simdeveloper/image/upload', formData)
            setState({...state, photo:imageURL.data.url})
            await axios.post('/create-post', state)
            history.push('/')
        } catch(err){
            console.log(err);
        }
        
    } 
    console.log(state);

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
