import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Register from './Register'
import Login from './Login'
class Routing extends Component {
  render() {
    return (
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
           <Route path="/register" component={Register} /> 
           <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Routing;