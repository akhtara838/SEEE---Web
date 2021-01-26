import React from 'react';
import Form from '../components/form';

import Nav from '../components/nav'
import Bio from '../components/bio'

class CreateProfile extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <Form/>
            </div> 
        )
    }
}

export default CreateProfile;