import React from "react";
import styled from "styled-components";

import Repos from "./Repos";
import FollowInfo from "./FollowInfo";
import Followers from "./Followers";
import Following from "./Following";

const Overview = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-around;
	align-items: center;
	
	/* border: 1px solid white; */
	div.repos-section {
		max-height: 40vh;
		overflow-y: scroll;
	}
	div.follow-section {
		max-height: 30vh;
		width: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		align-items: flex-start;

		/* div.followers-section {
			width: 40%;
		}
		div.following-section {
			width: 40%;
		} */
	}
	/* div {
		border: 1px solid black;
		width: 90%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
	} */
`;

const UserOverview = props => {
	const { user, repos, followers, following} = props;
	console.log(user);
	return (
		<Overview>
			<div className="repos-section">
				<Repos repos={repos} />
				{/* <h2>Repositories</h2>
				<p>Number of Repositories: {repos.length}</p> */}
			</div>
			<div className="follow-section">
				<FollowInfo followers={followers} following={following} />
			{/* <div className="followers-section">
				<Followers followers={followers}/>
				
			</div>
			<div className="following-section">
				<Following following={following} />
			</div> */}
			</div>
		</Overview>
	);
};

export default UserOverview;