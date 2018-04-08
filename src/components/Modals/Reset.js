import React, { Component } from 'react';

class Reset extends Component {
	render() {
		return (
			<div id="modalReset" className="modal fade" role="dialog">
				<div className="modal-dialog modal-sm">
					{/* Modal content*/}
					<div className="modal-content">
						<div className="modal-body">
							<h4>Are you sure to reset?</h4>
						</div>
					<div className="modal-footer">
						<button type="button" className="reset btn btn-danger" data-dismiss="modal" default>Reset</button>
						<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
					</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Reset;