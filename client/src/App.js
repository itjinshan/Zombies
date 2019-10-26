import React, { Component } from 'react'
import axios from 'axios';
import Home from './components/home';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component {
  render(){
    return (
      <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login} />
    </Router>
    )

  }
}

