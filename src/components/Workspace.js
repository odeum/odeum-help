import React, { Component } from 'react'

export const FunctionalComponent = (props) => {
	props.helpId('0231f822-cb05-80e5-4e3d-1f4c0307c917')
	return (
		<div>
			<p>Registering help for this component: 0231f822-... </p>
		</div>
	)
}

class WorkspaceComponent extends Component {
	constructor(props) {
		super(props)
		
		this.props.helpId('0307c917-ca92-4e3d-80e5-dc70fdcc81ee')
	}

	render() {
		return (
			<div>
				<p>Registering help for this component: 0307c917-... </p>
			</div>
		)
	}
}

export default WorkspaceComponent

/* 

** Alternative to using the constructor is using CDM lifecycle method:

	componentDidMount() {
		this.props.helpId('0307c917-ca92-4e3d-80e5-dc70fdcc81ee')
	}

*/

