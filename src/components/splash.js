import React from 'react';

import {
    Link
  } from "react-router-dom";

import './splash.css'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    openProfileMaker(e) {
        return test
    }

    render() {
        return (
        <div className="hero-wrap">
            <div className="hero">
                <div className="header">
                    <h1>SYSTEM ENGINEERING<br/>EDUCATION ECOSYSTEM</h1>
                </div>
                <div className="sub-header">
                    <h2>Creating an Ecosystem for Systems<br/>Engineering Education</h2>
                </div>
                <div className="cta">
                    <Link className="cta-button" to="/profile-pg">CREATE A PROFILE</Link>
                </div>
            </div>
        </div>
        )
    }
}

export default Splash;