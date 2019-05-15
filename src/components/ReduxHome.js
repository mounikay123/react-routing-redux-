import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getSubjectDetails} from '../actions/postActions'
 class ReduxHome extends Component {
     componentDidMount(){
         this.props.getPosts()

     }
  render() {
      console.log(this.props.Posts)
    return (
      <div>
        <h1>Redux home</h1>
      </div>
    )
  }
} 
const mapStateToProps =state =>({
Posts:state.subjectReducer.mounika
})
 const mapDispatchToProps=dispatch=>({
    getPosts:()=>dispatch(getSubjectDetails())
  
})
export default connect(mapStateToProps,mapDispatchToProps)(ReduxHome);