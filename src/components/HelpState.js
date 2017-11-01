import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HelpState extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentHelpId: null
		}
	}

	setCurrentHelpId = () => {
		this.setState({ currentHelpId: this.props.setHelpId })
	}

	getCurrentHelpId = () => {
		return this.state.currentHelpId
	}

	render() {
		const { set, getHelpId } = this.props
		return (
			<div>
				{getHelpId(this.getCurrentHelpId())}
				{/* {set ? (
					this.setCurrentHelpId()
				) : (
					getHelpId(this.getCurrentHelpId())
				)} */}
			</div>

		)
	}
}

HelpState.propTypes = {
	setHelpId: PropTypes.string,
	getHelpId: PropTypes.func
}

export default HelpState

