import React, { Component } from 'react'
import WorkspaceComponent, { FunctionalComponent } from 'components/Workspace'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpId: ''
		}
	}

	propagateHelpId = (id) => {
		console.log('Propagating ... ')
		this.setState({ helpId: id })
	}

		
	render() {
		return (
			<div>
				{this.state.helpId}
				<WorkspaceComponent helpId={this.propagateHelpId} />
				<FunctionalComponent helpId={this.propagateHelpId} />
			</div>
		)
	}
}

export default App
