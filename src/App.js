import React, { Component } from 'react'
import AppContainer from 'components/AppContainer/AppContainer'
import Header from 'components/Header/Header'
import MenuPanel from 'components/Menu/MenuPanel'
import Menu from 'components/Menu/Menu'
import Tab from 'components/Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'
import Footer from 'components/Footer/Footer'


/* Demo */
import { SimpleDiv } from 'demos/SimpleDiv'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpID: 0
		}

		Workspace.defaultProps = {
			SetHelpID: this.SetHelpID
		}

	}

	SetHelpID = (helpID) => {
		return helpID === this.state.helpID ? null : this.setState({ helpID: helpID })
	}

	render() {
		return (
			<AppContainer>
				<Header />
				<MenuPanel>
					<Menu icon={'help'} route='/help' label={'ODEUM Help Server'} >
						<Tab icon={'assignment'} label={'Getting help'} route={'/getting-help'} >
							<Workspace helpID={1}>
								<SimpleDiv/>
							</Workspace>
						</Tab>
						<Tab icon={'assignment_turned_in'} label={'Subtab'} route={'/react-component'}>
							<Workspace helpID={2}>
								<SimpleDiv/>
							</Workspace>
						</Tab>
						<Tab icon={'phone'} label={'Phone'} route={'/phone'} >
							<Workspace helpID={3}>
								<SimpleDiv />
							</Workspace>
						</Tab>
					</Menu>
					<Menu icon={'tab'} route='/menu2' label={'Menu with prop'}>
						<Tab label={'No help'} route={'/no-help1'} workspace={SimpleDiv} />
						<Tab label={'No help'} icon={'help'} route={'/no-help2'} workspace={SimpleDiv} />
						<Tab label={'No help'} icon={'help_outline'} route={'/no-help3'} workspace={SimpleDiv} helpID={4} />
					</Menu>
				</MenuPanel>
				<Footer helpId={this.state.helpID} />
			</AppContainer>
		)
	}
}

export default App
