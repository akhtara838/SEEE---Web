import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';

import Home from './pages/home.js';
import CreateProfile from './pages/create-profile'
import ProfilePage from './pages/profile-pg'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/create-profile">
            <CreateProfile />
          </Route>
          <Route path="/profile-pg">
            <ProfilePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
