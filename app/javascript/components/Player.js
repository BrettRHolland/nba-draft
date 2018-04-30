import React from 'react';

const Player = props => {
  let dataTarget = `#${props.id}`;
  return (
    <div className="row no-gutters pb-4 mb-4 border-bottom">
      <div className="col-auto pr-3 h5 secondary-text player-rank">{props.rank}.</div>
      <div className="col">
        <div className="row align-items-center">
          <div className="col-sm-6 col-md-8">
            <div className="row">
              <div className="col-12 h5 player-name" data-toggle="modal" data-target={dataTarget}>
                {props.name}
              </div>
              <div className="col-sm-12 col-md-auto secondary-text">{props.team}</div>
              <div className="col-sm-12 col-md-auto secondary-text">{props.position}</div>
              <div className="col-sm-12 col-md-auto secondary-text">{props.height}</div>
              <div className="col-sm-12 col-md-auto secondary-text">{props.weight} lbs</div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 text-right">
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
        aria-hidden="true"
      >
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
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
