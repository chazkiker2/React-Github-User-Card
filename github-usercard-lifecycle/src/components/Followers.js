import React from "react";
import styled from "styled-components";

const StyledFollowers = styled.div`
	width: 100%;
	/* border: 1px solid black; */
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const FollowerCard = styled.div`
	/* border: 1px solid black; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	align-items: center;
	width: 350px;
	height: 100px;
	background-color: ${pr => pr.theme.gray900};
	border-radius: 10px;
	margin: 10px;
	img {
		width: 80px;
		height: auto;
		border-radius: 50%;
	}
	div.infoDiv {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
		a {
			color: ${pr => pr.theme.white};
			font-size: 28px;
			font-weight: 600;
		}
	}
`;

const Followers = props => {
	const { followers } = props;
	
	return (
		<StyledFollowers>
		{
			followers.map(follower => {
				return (
					<FollowerCard href={follower.url} className="followers-card" key={follower.node_id}>
						<img src={follower.avatar_url} key={follower.avatar_url} alt="profile avatar" />
						<div className="infoDiv">
							<a href={follower.html_url} className="follower-username">{follower.login}</a>
							{/* <a href={follower.url}>Link to GitHub</a> */}
						</div>
						
					</FollowerCard>
				);
			})
		}
		</StyledFollowers>
	);
};
export default Followers;