import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component{

	createListItems(){
		return this.props.users.map((user) => {
			return(
				<li 
					key={user.id}
					onClick={()=>this.props.selectUser(user)}
					
				>
				{user.first} {user.last}</li> 
			);
		});
	}

	render(){
		return(
			<ul>
				{this.createListItems()}
			</ul>
		);
	}
}

function mapStateToProps(state){//take part of our store as a state, and pass it as state to our components
	return{
		users: state.users
	};
}

function matchDispatchProps(dispatch){
	return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchProps)(UserList);//taking the UserList component, and make it aware of the user data