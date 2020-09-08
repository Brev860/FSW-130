import {combineReducers} from 'redux'
import {userReducer} from './contact'


export const reducers = combineReducers({
    user: userReducer

})

