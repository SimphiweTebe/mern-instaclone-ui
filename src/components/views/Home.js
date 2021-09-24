import React from 'react'
import { BiComment } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
// import { AiFillHeart } from 'react-icons/ai'

function Home() {
    return (
        <section className="home">
            <div className="home-card">
                <div className="posted-by">
                    <div className="user-pic"
                        style={{ background:  `url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}
                    />
                    <h5 className="user-name">Simphiwe</h5>
                </div>
                <div className="post-item">
                    <img src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="post item" />
                </div>
                <div className="post-icons">
                    <BsHeart />
                </div>
                <div className="post-title">
                    <h5>Post title</h5>
                </div>
                <div className="post-comments">
                    <span><BiComment /></span>
                    <input type="text" placeholder="Add comment" />
                    <button>Post</button>
                </div>
            </div>
            <div className="home-card">
                <div className="posted-by">
                    <div className="user-pic"
                        style={{ background:  `url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}
                    />
                    <h5 className="user-name">Simphiwe</h5>
                </div>
                <div className="post-item">
                    <img src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="post item" />
                </div>
                <div className="post-icons">
                    <BsHeart />
                </div>
                <div className="post-title">
                    <h5>Post title</h5>
                </div>
                <div className="post-comments">
                    <span><BiComment /></span>
                    <input type="text" placeholder="Add comment" />
                    <button>Post</button>
                </div>
            </div>
            <div className="home-card">
                <div className="posted-by">
                    <div className="user-pic"
                        style={{ background:  `url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}
                    />
                    <h5 className="user-name">Simphiwe</h5>
                </div>
                <div className="post-item">
                    <img src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="post item" />
                </div>
                <div className="post-icons">
                    <BsHeart />
                </div>
                <div className="post-title">
                    <h5>Post title</h5>
                </div>
                <div className="post-comments">
                    <span><BiComment /></span>
                    <input type="text" placeholder="Add comment" />
                    <button>Post</button>
                </div>
            </div>
            
        </section>
    )
}

export default Home
