import React from 'react'
import { Link } from 'react-router-dom'

function CreatePost() {
    return (
        <section className="form-wrapper">
            <h1>Create your post</h1>
            <form className="form">
                <label htmlFor="title">
                    <input type="text" name="title" id="title" placeholder="Post title" />
                </label>
                <label htmlFor="password">
                    <input type="text" name="body" id="body" placeholder="Post body" />
                </label>
                <label htmlFor="password">
                    <input type="file" name="photo" id="photo" />
                </label>
                <button>Create Post</button>
            </form>
        </section>
    )
}

export default CreatePost
