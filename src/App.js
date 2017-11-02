import React, { Component } from 'react'
import { WorkspaceComponent1, WorkspaceComponent2, FunctionalComponent } from 'components/Workspace'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpId: null
		}
	}


	propagateHelpId = (id) => {
		if (this.state.helpId !== id) {
			console.log('Propagating ... ', id)
			this.setState({ helpId: id })
		}
	}

	renderWorkspaceMethod = () => {
		// this.propagateHelpId('4')
		return (
			<div>
				<p>Registering help for this class method component ...</p>
			</div>
		)
	}
	render() {
		return (
			<div>				
				<WorkspaceComponent1 helpId={this.propagateHelpId} /> 
				<WorkspaceComponent2 helpId={this.propagateHelpId} /> 
				<FunctionalComponent helpId={this.propagateHelpId} />
				{renderWorkspaceFunction()}
				<p>Current help id: {this.state.helpId}</p>
			</div>
		)
	}
}

export default App

const renderWorkspaceFunction = () => {
	this.propagateHelpId('4')
	return (
		<div>
			<p>Registering help for this functional component ...</p>
		</div>
	)
}