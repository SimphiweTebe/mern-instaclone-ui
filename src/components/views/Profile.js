import React from 'react'

function Profile() {
    return (
        <>
            <section className="profile">
                    <div className="profile-pic" 
                        style={{ background:  `url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`, 
                            backgroundRepeat: 'no-repeat', 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        
                        }}>
                        
                    </div>
                    <div className="profile-details">
                        <h4>Simphiwe</h4>
                        <ul className="profile-details__stats">
                            <li className="stat"><strong>2</strong> posts</li>
                            <li className="stat"><strong>185</strong> followers</li>
                            <li className="stat"><strong>42</strong> following</li>
                        </ul>
                    </div>
            </section>
            <section className="grid-col-4 user-gallery">
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=180" alt="" />
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=180" alt="" />
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=180" alt="" />
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=180" alt="" />
            </section>
        </>
    )
}

export default Profile
