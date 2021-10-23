import {createStore,applyMiddleware} from 'redux'
import Logger from 'redux-logger'
import Thunk from 'redux-thunk'
import {reducer} from './data/reducer'

const store = createStore(reducer,applyMiddleware(Logger,Thunk))

export  default store