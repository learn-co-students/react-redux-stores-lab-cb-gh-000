export default function createStore(reducer){
// your code here!
  let state
  state = reducer(state, {});
  let listeners = [];

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach( listener => listener()); //call each listener function inside the callback
  }

  function subscribe(listener) {
    listeners.push(listener); //push listener function into array
  }

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}
