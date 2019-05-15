import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Register extends Component {
  state = {
    emailId: '',
    password: '',
    arr: [],
    isRegister: false,
    errors:[]
  }
  hangleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.isFormValid();
    const val = this.state

    this.setState({ arr: val.arr.concat(val.emailId, val.password)  })
    console.log(this.state.arr);
    if(this.state.arr!==[]){
      this.setState({isRegister:true})
    }
  }
  isFormValid=()=>{
    let error='';
    let errors=[]
    if(this.isFormEmpty(this.state)){
error={message:'Fill all the details'}
this.setState({errors:errors.concat(error)})

    }
  }
  isFormEmpty=({emailId,password})=>{
return !emailId.length || !password.length;
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <form>
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" name='emailId' value={this.state.emailId} onChange={this.hangleChange} />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" name='password' value={this.state.password} onChange={this.hangleChange} />
              </div>
              <button type="submit" class="btn btn-default" onClick={this.handleSubmit}> Submit</button>
            </form>
            {this.state.arr}
            {this.state.isRegister ? <Redirect to={{
              pathname: '/login',
              state: { arrayDetails: this.state.arr }
            }} /> : null}
           {this.state.error}
          </div>
        </div>
      </div>
    )
  }
}
export default Register;