import React  from 'react'
import './profiledetails.css'

function Details()
{
   return(
        <div className = 'Details'>
            <div class="vl"></div>
    
            <div className = 'info'>
                <div className = "mini1">
                <h1>NAME</h1>
                <input type="text" placeholder="Jane Doe" name="Jane Doe" id ="Name"></input>
                </div>
            </div>
        </div>
    )
}
    export default Details