import { render } from '@testing-library/react'
import React from 'react'
import './bio.css'
import Details from './profiledetails'
import Card from './Profile_Card/Card'


class Bio extends React.Component {
    render()
    {
        <h1>HEYYYY!</h1>
        return(
            <div className = 'Bio'>
                <Card />
                <Details />
            </div>
        )
    }
}

export default Bio;