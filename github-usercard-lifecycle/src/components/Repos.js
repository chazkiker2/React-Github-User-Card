import React from "react";
import styled from "styled-components";

const RepoCard = styled.div`
	/* border: 1px solid black; */
	background-color: ${pr => pr.theme.gray900};
	border-radius: 15px;
	width: 90%;
	margin: 10px auto;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: center;
	div.repo-header-section {
		width: 97%;
		/* border: 1px solid green; */
		padding: 10px 0;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		div.repo-title {
			/* background-color: ${pr => pr.theme.gray200};
			border-radius: 5px; */
			height: 50px;
			padding: 1% 0;
				h3 {
					color: ${pr => pr.theme.green500};
				}
			}
		div.owner-info {
			width: 270px;
			height: 50px;
			display: flex;
			background-color: ${pr => pr.theme.gray600};
			border-radius: 5px;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			/* width: 30%; */
			img {
				width: 40px;
				height: auto;
				border-radius: 3px;
				margin: 5px;
			}

			div.owner-text {
				padding: 0 5px;
				display: flex;
				flex-flow: column nowrap;
				h5 {
					color: ${pr => pr.theme.gray100};
				}

				a.owner-link {
					display: inline-block;
					width: 100%;
					color: ${pr => pr.theme.green500};
					font-weight: 600;
					border-radius: 5px;
					
					&:hover {
						background-color: ${pr => pr.theme.green500};
						color: ${pr => pr.theme.white};
						text-decoration: none;
						transition: all 0.2s ease-in-out;
					}
					transition: all 0.2s ease-in-out;
				}
			}
		}

	}
	div.description {
		display: flex;
		width: 97%;

		p {
			color: ${pr => pr.theme.gray200};
		}
	}
	div.details {
		width: 97%;
		display: flex;
		/* margin: 0 2px; */
		flex-flow: row nowrap;
		overflow-x: scroll;
		scrollbar-width: 0;
		justify-content: space-between;
		align-items: flex-start;
		&::-webkit-scrollbar {
			display: none;
		}
		p {
			display: block;
			width: auto;
			white-space: nowrap;
			padding: 12px;
			/* margin: 5px; */
			border-radius: 5px;
			background: ${pr => pr.theme.green500};
			color: ${pr => pr.theme.whiteF15};
		}
	}
`;

const Repos = props => {
	const { repos } = props;
	// const { owner } = repos;
	const formatDate = (date) => {
		const arr = date.split("T")[0].split("-");
		return `${arr[1]}-${arr[2]}-${arr[0]}`;
	};
	return (
		<div>
			{
				// console.log(repos);
				repos.map(repo => {
					console.log(repo);
					console.log(repo.owner);
					const { owner } = repo;
					return (
						<RepoCard className="repos-card" key={repo.node_id}>


							<div className="repo-header-section">
								<div className="repo-title">
									<h3 className="name">{repo.name}</h3>
									
								</div>
								<div className="owner-info">
									<img src={owner.avatar_url} key={owner.avatar_url} alt="profile avatar" />
									<div className="owner-text">
										<h5>Repository Owner: {owner.login}</h5>
										<a className="owner-link" href={owner.url}>Link to Owner's Profile</a>
									</div>
								</div>
							</div>
							<div className="description">
								<p>Description: {repo.description ? repo.description : "None"}</p>
							</div>
							<div className="details">
								<p>License: {repo.license ? repo.license.name : "None"}</p>
								<p>Forks: {repo.forks_count}</p>
								<p>Last Push: {repo.pushed_at ? formatDate(repo.pushed_at) : "Unknown"}</p>
								<p>
									Topics:
									{
										(repo.topics && repo.topics.length > 0)
											? repo.topics.map(topic => (<span key={topic}> {topic},</span>))
											: <span> None</span>
									}
								</p>
								<p>Size: {repo.size}</p>
							</div>
						</RepoCard>
					);
				})
			}
		</div>
	);
};
export default Repos;