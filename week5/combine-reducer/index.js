import store from './redux/index'
import {addShow, removeShow, getAllShows} from './redux/tvshows'
import {addMovie, removeMovie, getMovies} from './redux/movies'

store.dispatch(addMovie({
    title:'Die Hard',
    genre:'Action'
}))