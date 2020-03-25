import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimaryNav from './components/PrimaryNav';
import Home from './components/Home';
import makePost from './components/makePost';
import Profile from './components/Profile';
//import Sharmony logo from './logo.svg';
import './App.css';
import logInScreen from './components/logIn';




  const App = (props) => {
    return (
      <div className="container">
          <Router>
              <Switch>

                  <Route path="/components/logIn">
                      <PrimaryNav />
                      <logInScreen />
                      
                  </Route>
  
                  <Route path="/components/Make_Post">
                      <PrimaryNav />
                      <makePost />
                  </Route>
  
  
                  <Route path="/components/Profile">
                      <PrimaryNav />
                      <Profile />
                  </Route>


                  <Route path="/">
                      <PrimaryNav />
                      <Home />
                  </Route>

                  

              </Switch>
          </Router>
      </div>
    );
}

export default App;
