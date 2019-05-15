import React, { Component } from 'react';
import {getCurrencyDetails2} from '../actions/postActions'
import {connect} from 'react-redux';
 class ReduxFetch extends Component {
    componentDidMount(){
        this.getCurrencyDetails()
    }
  getCurrencyDetails=()=>{
        fetch('https://api.stag.talentscreen.io/v1/lookup/currencies?limit=100').then(res=>{
            res.json().then(response=>{
         this.props.sendcurencyToStore(response)
            })
        })
      }
     
  render() {
      console.log(this.props.getCurrncy,"sid")
    return (
      <div>
        {this.props.getCurrncy.map((val)=>{
          return  <div key={val.id}>{val.name}</div>
        })}
      </div>
    )
  }
}
const mapStateToProps =state=>({
    getCurrncy:state.subjectReducer.currenc
})
 const mapDispatchToProps=(dispatch)=>({
  sendcurencyToStore:(data)=>dispatch(getCurrencyDetails2(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(ReduxFetch);
