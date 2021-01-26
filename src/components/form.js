import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import FormInput from './formInput.js'
import SchoolForm from './schoolForm.js'

import individualJson from '../data/individualForm.json'
import businessJson from '../data/businessForm.json'
// import './form.css'

class Form extends React.Component {
    render() {
        return (
            <div className="form-wrap">
                <div className="entity-type-pick">
                    <h3>What kind of user are you?</h3>
                    <div class="entity-wrap">
                        <NavLink
                            activeStyle={{
                            fontWeight: "bold",
                            color: "#c7292a"
                        }}to="/create-profile/individual">Individual</NavLink>
                        <NavLink
                            activeStyle={{
                            fontWeight: "bold",
                            color: "#c7292a"
                        }}to="/create-profile/business">Business</NavLink>
                        <NavLink
                            activeStyle={{
                            fontWeight: "bold",
                            color: "#c7292a"
                        }}to="/create-profile/school">School</NavLink>
                    </div>
                </div>

                <Switch>
                    case 1:
                        <Route path="/create-profile/individual">
                            <FormInput formJson={individualJson}/>
                        </Route>
                    case 2:
                        <Route path="/create-profile/business">
                            <FormInput formJson={businessJson}/>
                        </Route>
                    case 3:
                        <Route path="/create-profile/school">
                            <SchoolForm/>
                        </Route>
                    break;
                </Switch>                        
            </div>  
            
        )
    }
}

export default Form;