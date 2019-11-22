import React, {Component,Fragment} from 'react';
import '../style/style.css'
import Home from './Home/Home';
import From from './event/event';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <Router>
        <div className="wraaper">
          <div className="header">
            <div className="navbar">
              <div className="logo">
                <img className="imgfluid" src={require('../logo/babastudio-logo.png')}/>
              
              </div>
              <div className="menu">
                <ul>
                  <Link to="/" className="li">Home</Link>
                  <Link to="/" className="li">BLogs</Link>
                  <Link to="/" className="li">Galery</Link>
                  <Link to="/from" className="li">Kontak</Link>
                  <Link to="/event" className="li">Simple event</Link>
                </ul>
              </div>
            </div>
          </div>
       
        <Fragment>
          <Route path="/" exact component={Home}/>
          <Route path="/from" component={From}/>
        </Fragment>
        </div>
      </Router>

    )
  }
}
export default App;