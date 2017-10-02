import countReducer from './reducers/countReducer';

export default function createStore(reducer){
  let state;
  let listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach (listener => listener())
  }

  dispatch({})

  const getState = () => {
    return state;
  }
  const subscribe = (listener) => {
    listeners.push(listener)
  }

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}
