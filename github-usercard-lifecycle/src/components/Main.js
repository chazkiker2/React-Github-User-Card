import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Redirect, Route, Link, Switch } from "react-router-dom";
import UserCard from "./UserCard";
import UserOverview from "./UserOverview";
const StyledMain = styled.main`
	nav.sticky-container {
		height: 60px;
		margin-top: 24px;
		text-align: center;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: flex-end;
		background-color: ${pr => pr.theme.whiteF85};
		position: sticky;
		top: 0px;
		/* border: 1px solid black; */
		Link, a {
			display: inline-block;
			font-size: 20px;
			font-weight: 600;
			padding: 0 20px;
			color: ${pr => pr.theme.blackF15};
			
		}
	}
	div.main-container {
		border: 1px solid black;
		max-width: 1280px;
		margin: 0 auto;
		height: 150vh;
		div.gutter-condensed {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			
		}
	}
`;

const Main = props => {
	const { user, followers } = props;
	return (
		<StyledMain>
			<Router>
				<nav className="sticky-container container">
					<Link to="/overview">Overview</Link>
					<Link to="/followers">Followers</Link>
					<Link to="/following">Following</Link>
				</nav>
				<div className="container main-container">
					<div className="gutter-condensed">
						<UserCard user={user} />
						<Switch>
							<Route path="/overview">
								<UserOverview user={user} followers={followers} />
							</Route>
							<Route path="/followers">
								<div>Followers</div>
							</Route>
							<Route path="/following">
								<div>Following</div>
							</Route>
							<Route path="/Repositories">
								<div>Repositories</div>
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