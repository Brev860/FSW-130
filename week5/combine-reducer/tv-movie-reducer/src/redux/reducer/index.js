import {combineReducers} from 'redux'
import {movieReducer} from './movieReducer'
import {tvReducer} from './tvReducer'

export const allReducers = combineReducers({
    movie: movieReducer,
    tvShow: tvReducer
})

