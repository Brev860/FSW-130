import redux from 'redux'
import {combineReducers,createStore} from 'redux'
import {movieReducer} from './reducer/movieReducer'
import { tvReducer } from './reducer/tvReducer'



const reducer = combineReducers({
    movie: movieReducer,
    tvShow: tvReducer
})

const store = createStore(reducer)

store.subscribe(() =>{
    console.log(store.getState())
})


export default store