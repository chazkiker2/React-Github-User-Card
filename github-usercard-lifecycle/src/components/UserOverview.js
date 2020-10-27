import React from "react";
import styled from "styled-components";

const Overview = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	align-items: flex-start;
	div {
		border: 1px solid black;
		width: 400px;
		height: 800px;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
	}
`;

const UserOverview = props => {
	const { user } = props;
	return (
		<Overview>
			<div>Overview</div>
			<div>Overview</div>
		</Overview>
	);
};

export default UserOverview;