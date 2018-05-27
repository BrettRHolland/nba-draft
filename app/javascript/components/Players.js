import React, { Component } from 'react';
import Player from './Player';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      active: '',
      playerAid: '',
      playerBid: '',
      playerA: [],
      playerB: [],
      comparePlayers: [],
      view: 'votes'
    };
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleComparisonSelection = this.handleComparisonSelection.bind(this);
    this.convertInches = this.convertInches.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/players', { credentials: 'same-origin' })
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
          players: body
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
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(submission),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
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
        this.setState({ players: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleComparisonSelection(id) {
    if (this.state.playerAid == '') {
      this.setState({ playerAid: id });
    } else if (this.state.playerBid != '') {
      this.setState({ playerAid: this.state.playerBid });
      this.setState({ playerBid: id });
    } else {
      this.setState({ playerBid: id });
    }
    fetch(`/api/v1/comparison/${id}`, { credentials: 'same-origin' })
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
        let allPlayers = this.state.comparePlayers;
        allPlayers.push(body);
        this.setState({
          comparePlayers: allPlayers
        });
        console.log(this.state.comparePlayers);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  convertInches(inches) {
    let feetFromInches = Math.floor(inches / 12);
    let inchesRemainder = inches % 12;

    return feetFromInches + "'-" + inchesRemainder + '"';
  }

  render() {
    let { players, active, playerAid, playerBid, view } = this.state;
    let renderView;
    let rank = 0;
    let showPosts = players.map(player => {
      let selectedClass;
      rank = rank + 1;
      let handleUpVoteClick = () => {
        this.handleUpVote(player.id, player.votes);
      };
      let handleComparisonSelection = () => {
        this.handleComparisonSelection(player.id);
      };
      if (player.id == playerAid || player.id == playerBid) {
        selectedClass = 'selected';
      }
      let height = this.convertInches(player.height);
      return (
        <Player
          key={player.id}
          id={player.id}
          rank={rank}
          name={player.name}
          position={player.position}
          team={player.team}
          height={height}
          weight={player.weight}
          year={player.votes}
          birth={player.birth}
          votes={player.votes}
          season={player.games[0].season}
          games={player.games[0].games}
          fgP={player.games[0].fgP}
          threeP={player.games[0].threeP}
          ftP={player.games[0].ftP}
          tReb={player.games[0].tReb}
          ast={player.games[0].ast}
          stl={player.games[0].stl}
          blk={player.games[0].blk}
          tov={player.games[0].tov}
          pts={player.games[0].pts}
          handleUpVoteClick={handleUpVoteClick}
          handleComparisonSelection={handleComparisonSelection}
          selectedClass={selectedClass}
        />
      );
    });

    if (view == 'votes') {
      renderView = showPosts;
    }
    return <div className="container mt-5">{renderView}</div>;
  }
}

export default HomeContainer;
