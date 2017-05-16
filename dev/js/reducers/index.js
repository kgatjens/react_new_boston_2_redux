//combiner
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
	users: UserReducer,
	activeUser: ActiveUserReducer
	//movies : MoviesReducer, can add all the objects here
});

export default allReducers;