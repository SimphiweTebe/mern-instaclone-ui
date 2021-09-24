import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
import { FiHome } from 'react-icons/fi'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineLogin } from 'react-icons/ai'
import { GrAddCircle } from 'react-icons/gr'


function Navbar() {

    return (
        <div className="nav-wrapper">
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            <span className="link-icon"><FiHome /></span>
                            <span className="link-text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <span className="link-icon"><AiOutlineLogin /></span>
                            <span className="link-text">Login</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <span className="link-icon"><AiOutlineLogin /></span>
                            <span className="link-text">Sign up</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/create">
                            <span className="link-icon"><GrAddCircle /></span>
                            <span className="link-text">Create Post</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <span className="link-icon"><FaRegUserCircle /></span>
                            <span className="link-text">Profile</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
