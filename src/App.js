import React, { Component } from 'react'
import HelpModal from './components/HelpModal'
import Workspace from './components/Workspace'
import HelpState from './components/HelpState'


class App extends Component {

	state = {
		helpId: null
	}

	getHelpId = (helpId) => {
		this.setState({ helpId: helpId })
	}

	render() {
		return (
			<div>
				{/* A workspace component rendered by a "Tab" */} 
				<Workspace />
				{/* Help component composed in "Footer" */}
				<HelpState set={false} getHelpId={this.getHelpId} />
				<HelpModal />
				{console.log(this.state.helpId)}
			</div>
		)
	}
}

export default App
