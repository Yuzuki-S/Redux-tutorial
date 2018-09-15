import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {selectUser} from '../actions/index'


class UserList extends Component {
    createListItems() {
        return this.props.users.map((user)=> {
            return (
                <li 
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                 > 
           {/* "selectUser" is a function so treat this as a function by adding () =>  */}
                {user.first} {user.last}</li>
            )
        })
    } // now "this.props.users" = the list of users (reducer-users file) as defined in the mapStateToProps function
    //Anytime when you make a list <li> of items, each of them has to have a unique key
    render () {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

//two functions (this is the data and this is the component and this is how they are connected)
//containers are componants that hooked up to data storage
function mapStateToProps(state){
    return {
        users:state.users
    }
}
//all this does is takes a piece of application store my application state, the main data, and passes it into the above component as a propety
//all this does is takes a piece of state which is part of your store and send it to your component as props (from reducers)
//so in our component we can say this.props.users = the users for our entire application 

function mapDispatchToProps (dispatch){
    return bindActionCreators({selectUser:selectUser}, dispatch)
} // call function - action


export default connect (mapStateToProps, mapDispatchToProps)(UserList);


      