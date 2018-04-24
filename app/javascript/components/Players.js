import React, { Component } from "react";
import Player from "./Player";

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: []
		};
    this.handleUpVote = this.handleUpVote.bind(this);
	}

	componentDidMount() {
		fetch("/api/v1/players", { credentials: "same-origin" })
			.then(response => {
				if (response.ok) {
					return response;
				} else {
					let errorMessage = `${response.status} (${response.statusText})`,
						error = new Error(errorMessage);
					throw error;
				}
			})
			.then(response => response.json())
			.then(body => {
				this.setState({
					players: body.players
				});
			})
			.catch(error => console.error(`Error in fetch: ${error.message}`));
	}

  handleUpVote(id, votes) {
		let newVoteCount = votes + 1;
		let playerId = id;
		let submission = {
			id: playerId,
			votes: newVoteCount
		};
    fetch(`/api/v1/players/${submission.id}`, {
        credentials: "same-origin",
        method: "PATCH",
        body: JSON.stringify(submission),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
            throw error;
          }
        })
        .then(response => response.json())
        .then(body => {
          this.setState({ players: body.players });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
	}



	render() {
		let { players } = this.state;
		let rank = 0;
		let showPosts = players.map(player => {
			rank = rank + 1;
      let handleUpVoteClick = () => {
				this.handleUpVote(player.id, player.votes);
			};
			return (
				<Player
					key={player.id}
					id={player.id}
					rank={rank}
					name={player.name}
					position={player.position}
					team={player.team}
					height={player.height}
					weight={player.weight}
					year={player.votes}
					birth={player.birth}
					votes={player.votes}
          handleUpVoteClick={handleUpVoteClick}
				/>
			);
		});
		return <div className="container mt-5">{showPosts}</div>;
	}
}

export default HomeContainer;
