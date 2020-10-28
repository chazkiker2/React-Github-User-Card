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
			following: [],
			repos: [],
		};
	}

	fetchUser = (username) => {
		axios.get(`https://api.github.com/users/${username}`)
			.then(res => {
				this.setState({
					user: res.data,
				})
				console.log(this.state.user);
			});
	};
	fetchFollow = (username) => {
		axios.get(`https://api.github.com/users/${username}/followers`)
			.then(res => {
				this.setState({
					followers: res.data,
				})
			})
			.catch(err => {console.log(err);});

		axios.get(`https://api.github.com/users/${username}/following`)
			.then(res => {
				this.setState({
					following: res.data,
				})
			})
			.catch(err => {console.log(err)});
	};
	fetchRepos = (username) => {
		axios.get(`https://api.github.com/users/${username}/repos`)
			.then(res => {
				this.setState({
					repos: res.data,
				})
			})
			.catch(err => {console.log(err)});
	};
	fetchAll = (username) => {
		this.fetchUser(username);
		this.fetchFollow(username);
		this.fetchRepos(username);
	};

	componentDidMount() {
		this.fetchUser("chazkiker2");
		this.fetchFollow("chazkiker2");
		this.fetchRepos("chazkiker2");
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Main 
					user={this.state.user} 
					followers={this.state.followers} 
					following={this.state.following}
					repos={this.state.repos}
				/>
			</div>
		);
	}
}

export default App;
