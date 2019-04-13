import { createStore as reduxCreateStore } from 'redux'

const SET_LANGUAGE = 'SET_LANGUAGE'

const reducer = (state, action) => {
  if (action.type === SET_LANGUAGE) {
    return Object.assign({}, state, {lang: action.lang })
  }
  return state
}

const initialState = {
  lang: 'en',
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore