import timer from './Reducertimer'
import pause from './pause'
import reset from './reset'
import {combineReducers} from 'redux'



const allReducers = combineReducers({
    timer,
    pause,
    reset
   
})

export default allReducers