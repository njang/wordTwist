import React, { Component } from 'react';

class winMessage extends Component {
	render() {
		return (
			<div id="modalWin" class="modal fade" role="dialog">
				<div class="modal-dialog modal-md">
					{/* Modal content*/}
					<div class="modal-content">
						<div class="modal-header float-center">
							<h2>You Win!</h2>
						</div>
						<div id="winMessage" class="modal-body text-left">
							{/* <ul>
							<li>Using keyboard, enter your guess and press enter.</li>
							<li>Press <i>Twist</i> button to scramble the order of letters.</li>
							<li>Press <i>Reset</i> button to start another game.</li>
							</ul> */}
						</div>
						<div class="modal-footer">
							<button type="button" class="reset btn btn-danger" data-dismiss="modal">Play another</button>
							<button type="button" class="btn btn-default" data-dismiss="modal" default>Close</button>
						</div>
					</div>
				</div>
			</div>    
		);
	}
}

export default winMessage;