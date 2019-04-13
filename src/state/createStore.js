import { createStore as reduxCreateStore } from 'redux'

const SET_CALLBACK_LINK = 'SET_CALLBACK_LINK'

const reducer = (state, action) => {
  if (action.type === SET_CALLBACK_LINK) {
    return Object.assign({}, state, { callbackLink: action.callbackLink })
  }
  return state
}

const initialState = {
  callbackLink: '/',
  lang: 'en',
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore