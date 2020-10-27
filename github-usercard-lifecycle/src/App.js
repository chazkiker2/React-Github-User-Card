import React from "react";
// import styled from "styled-components";
// import { BrowserRouter as Router, Redirect, Route, Link, Switch } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import axios from "axios";

import Header from "./components/Header";
import Main from "./components/Main";


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {},
			followers: [],
		};
	}

	componentDidMount() {
		axios.get(`https://api.github.com/users/chazkiker2`)
			.then(res => {
				// console.log(res);
				console.log(res.data);
				this.setState({
					user: res.data,
				})
				console.log(this.state.user);
			});
		axios.get(`https://api.github.com/users/chazkiker2/followers`)
			.then(res => {
				console.log(res.data);
				// this.setState(prevState => ({
				// 	followers: [...prevState.followers, res.data],
				// }))
				this.setState({
					followers: res.data,
				})
				console.log(this.state.followers);
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Main user={this.state.user} followers={this.state.followers} />
			</div>
		);
	}
}

export default App;
