import 'babel-polyfill';//polyfill made the text complatible with all browsers
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';//provider func. exist inside redux
import {createStore} from 'redux'; //create the store, all data from entire app

import allReducers from './reducers';
import App from './components/app';


const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

