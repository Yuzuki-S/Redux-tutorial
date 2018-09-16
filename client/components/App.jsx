import React from 'react'
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
import {connect} from 'react-redux'
import {addUser} from '../actions/index'
import {bindActionCreators} from 'redux';
// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input:""
    }  
    this.addButton = this.addButton.bind(this)
  }

  addButton () {
    let newPeople = document.getElementById("add-cool-people").value
    this.setState({
      input: newPeople
        })
   return this.props.addUser(this.state.input)
  }
  render(){
    return(
    <div className='app'>
      <h1>Cool People List:</h1>
      <UserList />
          <input id ="add-cool-people" placeholder="Add Cool People"></input>
          <button id="add-button" onClick={this.addButton}>Add people</button> 
      <hr/>
      <h1>Cool People Details:</h1>
      <UserDetail />
    </div>
      )
  }   
}

function mapStateToProps(state){
  return {
      state
  }
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({addUser:addUser}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (App)

