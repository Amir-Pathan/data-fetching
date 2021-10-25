import {createStore,applyMiddleware,combineReducers} from 'redux'
import Logger from 'redux-logger'
import Thunk from 'redux-thunk'
import {reducer} from './data/reducer'
import {UserReducer} from './single/reducer'

const red = combineReducers({
    user : UserReducer,
    data : reducer
})

const store = createStore(red,applyMiddleware(Logger,Thunk))

export  default store