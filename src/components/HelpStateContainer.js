import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WorkspaceComponent extends Component {

	registerHelpId = () => {
		this.props.helpId('0307c917-ca92-4e3d-80e5-dc70fdcc81ee')
	}

	render() {
		this.registerHelpId()
		return (
			<div>
				
			</div>
		)
	}
}

// HelpStateContainer (top state manager = App)
class HelpStateContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpId: ''
		}
	}

	propagateHelpId = (helpId) => {
		this.setState({ helpId: this.props.helpId })
	}

	render() {
		return (
			<div>
				<WorkspaceComponent helpId={this.propagateHelpId} />
			</div>

		)
	}
}

HelpStateContainer.propTypes = {
	isOpen: PropTypes.bool
}

HelpStateContainer.defaultProps = {
	isOpen: false
}

export default HelpStateContainer

