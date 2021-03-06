import React from "react";
import styled from "styled-components";

const Card = styled.div`
	/* border: 1px solid black; */
	margin-left: 40px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	/* position: sticky; 
	top: 84px;  */
	/* margin-top: 0px;*/
img {
	border-radius: 50%;
}
	div.infoDiv {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const UserCard = props => {
	const { user } = props;
	return (
		<Card className="card" key={user.node_id}>
			<img src={user.avatar_url} key={user.avatar_url} alt="profile avatar" />
			<div className="infoDiv">
				<h3 className="name">{user.name}</h3>
				<p className="username">{user.login}</p>
				<p>{user.location}</p>
				<a href={user.url}>Link to GitHub</a>
				<p>Followers: {user.followers}</p>
				<p>Following: {user.following}</p>
				<p>Bio: {user.bio ? user.bio : "None"}</p>
			</div>
		</Card>
	);
};
export default UserCard;