import React from "react";
import styled from "styled-components";

// const Card = styled.div`
// 	border: 1px solid black;
// 	display: flex;
// 	flex-flow: column nowrap;
// 	justify-content: flex-start;
// 	align-items: center;
// 	div.infoDiv {
// 		display: flex;
// 		flex-flow: column nowrap;
// 		justify-content: space-evenly;
// 		align-items: center;
// 	}
// `;

const Following = props => {
	const { following } = props;
	return (
		<>
		{
			following.map(follower => {
				return (
					<div className="followers-card" key={follower.node_id}>
						<img src={follower.avatar_url} key={follower.avatar_url} alt="profile avatar" />
						<div className="infoDiv">
							<h3 className="name">{follower.name}</h3>
							<p className="follower-username">{follower.login}</p>
							<p>{follower.location}</p>
							<a href={follower.url}>Link to GitHub</a>
							<p>Followers: {follower.followers}</p>
							<p>Following: {follower.following}</p>
							<p>Bio: {follower.bio ? follower.bio : "None"}</p>
						</div>
					</div>
				);
			})
		}
		</>
	);
};
export default Following;