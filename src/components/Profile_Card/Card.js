import React, { useState } from 'react'
import './Card.css'

function Card()
{
    const [caption, setCaption] = useState("BIO")
    const [about, setAbout] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    return(
        <div className = 'Card'>
            <div className = 'upper-container'>
                <h1>SEEE PROFILE</h1>
                <div className='float'>
                    <div className = 'img1'>
                        <img src = ' ' alt = '' height="100px" width="100px" />
                    </div>
                    <div className = 'img2'>
                        <img src = ' ' alt = '' height="100px" width="100px" />
                     </div>
                </div>
            </div>
            <div className = 'lower-container'>
                <h2> { caption }</h2>
                <p> { about } </p>
                <button class="button">EMAIL</button>
                <button class="button">LINKEDIN</button>
                <button class="button">RESUME</button>
                    
                <button class="btn">EDIT PROFILE</button>
            </div>
        </div>
    )
}

export default Card