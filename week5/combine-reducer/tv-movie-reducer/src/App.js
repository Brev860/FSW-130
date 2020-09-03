import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import MovieList from './components/list'
import AddForm from './components/addForm'



import './App.css';
import { addMovie } from './redux/actions/movieAction';

function App() {


  const reduxMovie = useSelector(state => state.movie)
  const [movie, setMovie] = useState(reduxMovie)
  

  const updateMovies = (data) =>{
    setMovie(prev =>({
        ...prev,
         data
    }))
  }
console.log(movie)
  return (
    <div className="App">
      <AddForm
      addMovies={updateMovies}
      />
      <MovieList title={reduxMovie.title} genre={reduxMovie.genre} />
    </div>
  );
}

export default App;
