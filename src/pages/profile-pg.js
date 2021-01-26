import React from 'react';
import Form from '../components/form';

import Nav from '../components/nav'
import Bio from '../components/bio'

import {
    Link
  } from "react-router-dom";
import { render } from '@testing-library/react';

class ProfilePage extends React.Component {
    render() {
        return (

            <div>
                <Nav/>
                <Bio/>
            </div> 
        )
    }
}

export default ProfilePage;