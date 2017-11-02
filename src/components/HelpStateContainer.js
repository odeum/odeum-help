import React, { Component } from 'react'
import PropTypes from 'prop-types'

// HelpStateContainer 
class HelpStateContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpId: ''
		}
	}

	render() {
		const { x } = this.props
		return (
			<div>
				{x}
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

