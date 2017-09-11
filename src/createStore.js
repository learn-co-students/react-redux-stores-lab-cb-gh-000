import countReducer from './reducers/countReducer';
import candyReducer from './reducers/candyReducer';

export default function createStore(reducer){
	
	let state, listeners = [];
	
	const dispatch = (action) => {
		state = reducer(state,action);
		listeners.forEach(listener => listener())
	}
	
	const subscribe = (listener) => {
		listeners.push(listener);
	}
	
	const getState = () => {
		return state || 0;
	}
	
	return {
		getState,
		dispatch,
		subscribe
	}

}

export const store = createStore(candyReducer);
