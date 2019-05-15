import React, { Component } from 'react'
import {Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
          <Link to="/Register" ><button type="button" className="btn btn-xs btn-primary" > Register</button></Link>
      </div>
    )
  }
}
export default Home;