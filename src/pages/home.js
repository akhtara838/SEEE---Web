import React from 'react';

import Splash from '../components/splash';
import Nav from '../components/nav'
import Bio from '../components/bio'
class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <Splash/>
            </div> 
        )
    }
}

export default Home;