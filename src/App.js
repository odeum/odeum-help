import React, { Component } from 'react'
import { WorkspaceComponent1, WorkspaceComponent2, FunctionalComponent } from 'components/Workspace'

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
				<WorkspaceComponent1 helpId={this.propagateHelpId} /> 
				<WorkspaceComponent2 helpId={this.propagateHelpId} /> 
				<FunctionalComponent helpId={this.propagateHelpId} />
				<p>Current help id: {this.state.helpId}</p>
			</div>
		)
	}
}

export default App
