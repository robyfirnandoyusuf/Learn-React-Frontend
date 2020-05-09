import React, { Component } from 'react';
import TodoTable from '../../component/TodoTable'

export default class Content extends Component {
	// componentDidMount(){
	// 	const script = document.createElement("script");

	// 	script.src = 'js/content.js';
	// 	script.async = true;

	// 	document.body.appendChild(script);
	// }

	render() {
		return (
			<TodoTable/>
		);
	}
}
