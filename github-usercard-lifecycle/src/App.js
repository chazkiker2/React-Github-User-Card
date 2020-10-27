import React from "react";
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Header = styled.header`
	--color-header-bg: ${pr => pr.theme.gray900};
	--color-header-text: hsla(0,0%,100%,0.7);
	--color-header-logo: ${pr => pr.theme.white};
	background-color: var(--color-header-bg);
	color: var(--color-header-text);
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	div.header-part {
		/* width: 50%; */
		display: inline-flex;
		flex-flow: row-nowrap;
		justify-content: space-evenly;
		align-items: center;
		div.header-item {
			margin: 1rem;
			h1 {
				color: var(--color-header-logo);
			}
			.header-link {
				color: #FFF;
				white-space: nowrap;
				height: 32;
				width: 32;
				.octicon {
					display: inline-block;
					vertical-align: text-top;
					fill: var(--color-header-logo);
				}
				.v-align-middle {
					vertical-align: middle!important;
					fill: currentColor;
					display: inline-block;
				}
				svg:not(:root) {
					overflow: hidden;
				}
			}
			
			
		}
				form.header-search-form {
					display: inline-block;
					width: 200px;
					margin: 0px 30px;
					input.user-search {
						width: 100%;
						background-color: var(--color-header-bg);
						border: 1px solid var(--color-header-text);
						border-radius: 6px;
						color: var(--color-header-text);
					}
					
	
				}
	}
`;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [],
			followers: [],
		};
	}

	componentDidMount() {
		axios.get(`https://api.github.com/users/chazkiker2`)
			.then(res => {
				// console.log(res);
				console.log(res.data);
				this.setState(prevState => ({
					users: [...prevState.users, res.data],
				}))
				console.log(this.state.users);
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
				<Header className="App-header">
					<div className="header-part header-part-left">
						<div className="header-item">
							<a className="header-link" href="https://github.com" aria-label="GitHub Homepage" data-ga-click="Header, go to dashboard, icon:logo">
								<svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
							</a>
						</div>
						<div className="header-item">
							<h1>Github User Card</h1>
						</div>
					</div>
					<div className="header-part header-part-right">
						<form className="header-search header-search-form">
							<input className="user-search" type="text" placeholder="Search for a user..." />
						</form>
					</div>
				</Header>
				<div className="secondary-header nav-container">
					<nav>
						<Link to="/overview">Overview</Link>
						<Link to="/followers">Followers</Link>
						<Link to="/following">Following</Link>
					</nav>

				</div>
				<main>
					{this.state.users.map(usr => {
						return (
							<div className="card" key={usr.node_id}>
								<img src={usr.avatar_url} key={usr.avatar_url} alt="profile avatar" />
								<div className="infoDiv">
									<h3 className="name">{usr.name}</h3>
									<p className="username">{usr.login}</p>
									<p>{usr.location}</p>
									<a href={usr.url}>Link to GitHub</a>
									<p>Followers: {usr.followers}</p>
									<p>Following: {usr.following}</p>
									<p>Bio: {usr.bio}</p>
								</div>
							</div>
						);
					})}
				</main>
			</div>
		);
	}
}

export default App;
