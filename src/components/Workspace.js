import React, { Component } from 'react'

export class WorkspaceComponent1 extends Component {
	constructor(props) {
		super(props)
		
		this.props.helpId('1')
	}

	render() {
		return (
			<div>
				<p>Registering help for this class component ...</p>
			</div>
		)
	}
}


export class WorkspaceComponent2 extends Component {
	constructor(props) {
		super(props)

		this.props.helpId('2')
	}

	render() {
		return (
			<div>
				<p>Registering help for this class component ...</p>
			</div>
		)
	}
}

export const FunctionalComponent = (props) => {
	props.helpId('3')
	return (
		<div>
			<p>Registering help for this functional component {'3'} ...</p>
		</div>
	)
}

/* 
** Alternative to using the constructor is using CDM lifecycle method:

	componentDidMount() {
		this.props.helpId('0307c917-ca92-4e3d-80e5-dc70fdcc81ee')
	}
*/

