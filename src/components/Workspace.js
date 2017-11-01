import React, { Component } from 'react'
// import HelpState from './HelpState'

class Workspace extends Component {
	render() {
		return (
			<div>
				<p>This is my workspace component which has context sensitive help.</p>
				<p>I am registering the following help id: 0307c917-ca92-4e3d-80e5-dc70fdcc81ee</p>
				{/* <HelpState set={true} setHelpId={'0307c917-ca92-4e3d-80e5-dc70fdcc81ee'} /> */}
			</div>
		)
	}
}

export default Workspace

