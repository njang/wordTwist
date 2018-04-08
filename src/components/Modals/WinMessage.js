import React, { Component } from 'react';

class winMessage extends Component {
	render() {
		return (
			<div id="modalWin" className="modal fade" role="dialog">
				<div className="modal-dialog modal-md">
					{/* Modal content*/}
					<div className="modal-content">
						<div className="modal-header float-center">
							<h2>You Win!</h2>
						</div>
						<div id="winMessage" className="modal-body text-left">
							{/* <ul>
							<li>Using keyboard, enter your guess and press enter.</li>
							<li>Press <i>Twist</i> button to scramble the order of letters.</li>
							<li>Press <i>Reset</i> button to start another game.</li>
							</ul> */}
						</div>
						<div className="modal-footer">
							<button type="button" className="reset btn btn-danger" data-dismiss="modal">Play another</button>
							<button type="button" className="btn btn-default" data-dismiss="modal" default>Close</button>
						</div>
					</div>
				</div>
			</div>    
		);
	}
}

export default winMessage;