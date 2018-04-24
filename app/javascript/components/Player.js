import React from "react";

const Player = props => {
	return (
		<div className="row no-gutters pb-4 mb-4 border-bottom">
			<div className="col-auto pr-3 h5 secondary-text">{props.rank}.</div>
			<div className="col">
				<div className="row align-items-center">
					<div className="col-8">
						<div className="row">
							<div className="col-12 h5">{props.name}</div>
							<div className="col-auto secondary-text">{props.team}</div>
							<div className="col-auto secondary-text">{props.position}</div>
							<div className="col-auto secondary-text">
								{props.height} inches
							</div>
							<div className="col-auto secondary-text">{props.weight} lbs</div>
						</div>
					</div>
					<div className="col-4 text-right">
						<span className="votes rounded">{props.votes}</span>
						<i className="fas fa-chevron-up ml-2 rounded" onClick={props.handleUpVoteClick} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
