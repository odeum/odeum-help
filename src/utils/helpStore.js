import { createStore } from 'redux'


// Actions

export const SET_HELP_ID = 'SET_HELP_ID'
export const GET_HELP_ID = 'GET_HELP_ID'

// Action creators

export function setHelpId(helpId) {
	return {
		type: SET_HELP_ID,
		payload: helpId
	}
}



// Reducer

const reducer = (state, action) => {
	
	switch (action.type) {
		case SET_HELP_ID:
			return { 
				...state,
				helpId: action.payload
			}
		default:
			return state
	}
}

// const reducer = (state, action) => state

// Store

const initialState = {
	helpId: ''
}

const store = createStore(reducer, initialState)

window.store = store


setHelpId(123)

const { helpId } = store.getState()

