import React from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			username: "",
		};
	}

	componentDidMount() {
		axios.get(`https://api.github.com/users/chazkiker2`)
			.then(res => {
				// console.log(res);
				console.log(res.data);
				this.setState({
					username: res.data,
				})
			})
	}
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					
				</header>
			</div>
		);
	}
}

export default App;
