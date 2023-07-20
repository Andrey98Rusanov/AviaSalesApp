import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const defaultState = {
  id: null,
  tickets: [],
  all: true,
  withOut: true,
  one: true,
  two: true,
  three: true,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
      case "TOGGLE_ALL":
        if (!state.all) return {...state, all: true, withOut: true, one: true, two: true, three: true}
        else return {...state, all: false, withOut: false, one: false, two: false, three: false}
        case "TOGGLE_WITHOUT":
        if (state.all) return {...state, all: !state.all, withOut: !state.withOut}
        if (!state.all && state.one && state.two && state.three) return {...state, all: !state.all, withOut: !state.withOut}
        return {...state, withOut: !state.withOut}
        case "TOGGLE_ONE":
        if (state.all) return {...state, all: !state.all, one: !state.one}
        if (!state.all && state.withOut && state.two && state.three) return {...state, all: !state.all, one: !state.one}
        return {...state, one: !state.one}
        case "TOGGLE_TWO":
        if (state.all) return {...state, all: !state.all, two: !state.two}
        if (!state.all && state.withOut && state.one && state.three) return {...state, all: !state.all, two: !state.two}
        return {...state, two: !state.two}
        case "TOGGLE_THREE":
        if (state.all) return {...state, all: !state.all, three: !state.three}
        if (!state.all && state.withOut && state.one && state.two) return {...state, all: !state.all, three: !state.three}
        return {...state, three: !state.three}
        case "ADD_TICKETS":
        return {...state, tickets: action.payload}
    default: 
        return state
  }
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App/>
    </Provider>
);