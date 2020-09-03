import timer from './timer'
import isRunning from './isLogged'
import {combineReducers} from 'redux'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const middleWare = applyMiddleware(thunk)
const allReducers = combineReducers({
    timer,
    isRunning
    
})

export default allReducers