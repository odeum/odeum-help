import React, { Component } from 'react'
import PropTypes from 'prop-types'

// This should probably be stored in a Redux state
var currentHelpId = ''

export const registerHelp = (helpId) => {
	currentHelpId = helpId
	console.log(currentHelpId)
}

export const getCurrentHelpId = () => {
	return currentHelpId
}

export default registerHelp

class RegisterHelp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentHelpId: null
		}
	}

	setCurrentHelpId = () => {
		this.setState({ currentHelpId: this.props.helpId })
	}

	getCurrentHelpId = () => {
		return this.state.currentHelpId
	}

	render() {		
		const { helpId, getHelpId } = this.props
		return (
			<div>
				{helpId ? (
					this.setCurrentHelpId()
				) : (
					getHelpId(this.state.currentHelpId)
				)}
			</div>

		)
	}
}

RegisterHelp.propTypes = {
	helpId: PropTypes.string,
	getHelpId: PropTypes.func
}

// export default RegisterHelp

