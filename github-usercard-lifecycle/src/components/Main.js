import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Redirect, Route, Link, Switch } from "react-router-dom";
import UserCard from "./UserCard";
import UserOverview from "./UserOverview";
import FollowInfo from "./FollowInfo";
import Followers from "./Followers";
import Following from "./Following";
import Repos from "./Repos";

const StyledMain = styled.main`
background-color: ${pr => pr.theme.gray600};
overflow-y: hidden;
	nav.sticky-container {
		background-color: ${pr => pr.theme.gray900};
		height: 60px;
		padding-top: 24px;
		text-align: center;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: flex-end;
		position: sticky;
		top: 0px;
		/* border: 1px solid black; */
		Link, a {
			display: inline-block;
			font-size: 20px;
			font-weight: 600;
			padding: 0 20px;
			color: ${pr => pr.theme.white};
		}
	}
	div.main-container {
		/* border: 1px solid black; */
		
		max-width: 1300px;
		margin: 50px auto;
		/* height: 150vh; */
		div.gutter-condensed {
			background-color: ${pr => pr.theme.gray600};
			border-radius: 20px;
			display: flex;
			flex-flow: row nowrap;
		}
	}
`;

const Main = props => {
	const { user, followers, following, repos } = props;
	return (
		<StyledMain>
			<Router>
				<nav className="sticky-container container">
					<Link to="/overview">Overview</Link>
					<Link to="/repositories">Repositories</Link>
					<Link to="/follow-info">Follow Info</Link>
					{/* <Link to="/following">Following</Link> */}
				</nav>
				<div className="container main-container">
					<div className="gutter-condensed">
						<UserCard user={user} />
						<Switch>
							<Route path="/overview">
								<UserOverview user={user} followers={followers} following={following} repos={repos} />
							</Route>
							<Route path="/followers">
								{/* <div>Followers</div> */}
								<Followers followers={followers} />
							</Route>
							<Route path="/following">
								{/* <div>Following</div> */}
								<Following following={following} />
							</Route>
							<Route path="/follow-info">
								<FollowInfo following={following} followers={followers} />
							</Route>
							<Route path="/repositories">
								{/* <div>Repositories</div> */}
								<Repos repos={repos} />
							</Route>
							<Route exact path="/">
								<Redirect to="/overview" />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</StyledMain>
	);
};

export default Main;