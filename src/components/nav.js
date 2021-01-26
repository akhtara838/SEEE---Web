import React from 'react';

import './nav.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
        <div className="nav-wrap">
            <div className="nav-bar">
                <div className="nav-left">
                    <div className="nav-logo nav-element">
                        <Link to="/"><img src={logo} alt="SEEE logo"/></Link>
                    </div>
                    <div className="nav-element">
                        <p>Vision</p>
                    </div>
                    <div className="nav-element">
                        <p>Team</p>
                    </div>
                    <div className="nav-element">
                        <p>Contact</p>
                    </div>
                    <div className="nav-element">
                        <p>Search</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Nav;