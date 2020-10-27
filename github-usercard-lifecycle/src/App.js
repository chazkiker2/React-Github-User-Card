import React from "react";
// import logo from './logo.svg';
// import './App.css';
import axios from "axios";

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
				<header className="App-header">
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
				</header>
			</div>
		);
	}
}

export default App;
