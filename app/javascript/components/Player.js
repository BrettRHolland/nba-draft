import React from 'react';

const Player = props => {
  let dataTarget = `#${props.id}`;
  return (
    <div className="row no-gutters pb-4 mb-4 border-bottom">
      <div className="col-auto pr-3 h5 player-details player-rank">{props.rank}.</div>
      <div className="col">
        <div className="row align-items-center">
          <div className="col-sm-6 col-md-8">
            <div className="row">
              <div className="col-12 h5 player-name" data-toggle="modal" data-target={dataTarget}>
                {props.name}
              </div>
              <div className="col-sm-12 col-md-auto player-details">{props.team}</div>
              <div className="col-sm-12 col-md-auto player-details">{props.position}</div>
              <div className="col-sm-12 col-md-auto player-details">{props.height}</div>
              <div className="col-sm-12 col-md-auto player-details">{props.weight} lbs</div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 text-right">
            <i className="fas fa-balance-scale mr-2 rounded" onClick={props.handleComparisonSelection} />
            <span className="votes rounded">{props.votes}</span>
            <i className="fas fa-chevron-up ml-2 rounded" onClick={props.handleUpVoteClick} />
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id={props.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={props.id}
        aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.name}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered table-dark">
                <thead>
                  <tr>
                    <td>Season</td>
                    <td>Games</td>
                    <td>FG%</td>
                    <td>3P%</td>
                    <td>FT%</td>
                    <td>Reb</td>
                    <td>Ast</td>
                    <td>Stl</td>
                    <td>Blk</td>
                    <td>TO</td>
                    <td>Pts</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{props.season}</td>
                    <td>{props.games}</td>
                    <td>{props.fgP}</td>
                    <td>{props.threeP}</td>
                    <td>{props.ftP}</td>
                    <td>{props.tReb}</td>
                    <td>{props.ast}</td>
                    <td>{props.stl}</td>
                    <td>{props.blk}</td>
                    <td>{props.tov}</td>
                    <td>{props.pts}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
