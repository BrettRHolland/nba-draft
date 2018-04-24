import React from "react";

const Player = props => {
	return (
		<div className="row no-gutters pb-4 mb-4 border-bottom">
			<div className="col-auto pr-3 text-black-50 font-weight-bold">
				{props.rank}.
			</div>
			<div className="col">
				<div className="row align-items-center">
					<div className="col-9">
						<div className="row">
							<div className="col-12 font-weight-bold">{props.name}</div>
							<div className="col-auto text-black-50">{props.position}</div>
							<div className="col-auto text-black-50">{props.height} inches</div>
							<div className="col-auto text-black-50">{props.weight} lbs</div>
						</div>
					</div>
					<div className="col-3 text-right">
						{props.votes} <i class="fas fa-chevron-up ml-2 p-2 border rounded-circle text-center font-weight-bold" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
