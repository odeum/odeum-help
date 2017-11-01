import React, { Component } from 'react'
import { Button, Modal } from 'odeum-ui'

var messages = [
	'Good job, that is just perfect!',
	'Hello that worked well ...',
	'Awesome work dude!',
	'Super hero work my friend!',
	'Nice coding my man!',
	'You did something right!',
	'Alright you did it, so proud of you ',
	'Now we are getting somewhere'
]


function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)]
}

class HelpModal extends Component {

	constructor(props) {
		super(props)

		this.state = {
			modalIsOpen: false,
			subtitle: 'Get more help'
		}
	}

	handleRequestClose = () => {
		this.setState({
			modalIsOpen: false
		})
	}

	openModal = () => {
		this.setState({ modalIsOpen: true, subtitle: 'Click Get more help' })
	}

	changeSubtitle = () => {
		this.setState({ subtitle: getRandomMessage() })
	}

	renderModal = () => {
		return (
			<div>
				<h1>Help</h1>
				<h3>{this.state.subtitle}</h3>
				<h4>{this.props.helpId}</h4>
				<div>				
					<Button
						label={'Close Help'}
						icon='close'
						iconSize={18}
						color={'#E74C3C'}
						onClick={this.handleRequestClose}
					/>

					<Button
						label={'Get more help'}
						icon='help_outline'
						iconSize={18}
						color={'#2AC639'}
						onClick={this.changeSubtitle}
					/>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
				<Button
					label={'Help'}
					icon='help_outline'
					iconSize={18}
					color={'#3B97D3'}
					onClick={this.openModal}
				/>

				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.handleRequestClose}
					icon={'help'}
					label={'Help'}
					overlayScroll={false}
					render={this.renderModal}
				/>
			</div>
		)
	}
}

export default HelpModal