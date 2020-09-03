import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addMovie} from '../redux/actions/movieAction'



const AddMovie = (props) =>{
  const {addMovies} = props
 const [title, setTitle] = useState('')
 const [genre, setGenre] = useState('')
//  const [post, setPost] = useState({})
 const dispatch = useDispatch()

 const submitForm = (e) =>{
     e.preventDefault()
     const data = {title: title, genre: genre}
     addMovies(data)
    dispatch(addMovie(data))
 }

 
// console.log(post)
    return(
        <div>
            <form onSubmit={submitForm}>
            <input
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Add Title'
            />
            <input
              type='text'
              name='genre'
             value={genre}
             onChange={(e) => setGenre(e.target.value)}
              placeholder='Add Genre'
            />
            <button>Submit</button>
            </form>
            
        </div>
    )

}

export default AddMovie