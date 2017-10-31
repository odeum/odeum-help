import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Help extends Component {
	constructor(props) {
		super(props)

		this.state = {
			open: null
		}
	}

	handleClick = () => {
		console.log('Help is on its way ... ')
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Help</button>
			</div>
		)
	}
}

Help.propTypes = {
	getHelp: PropTypes.func
}

export default Help

