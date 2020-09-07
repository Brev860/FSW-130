<<<<<<< HEAD
import React, { useState } from 'react'

const InputForm = (props)=>{
   const [title, setTitle] = useState('')
   const [date, setDate] = useState('')
   const [movie, setMovie] = useState({})


   function submit(e){
      e.preventDefault()
      const newMovie = {title: title, date: date}
      setMovie({...newMovie})
   }

   
 
   
   return(
   <form onSubmit={submit} >
       <input 
        type='text'
        name='title'
        placeholder='title'
        required
        onChange={(e)=> setTitle(e.target.value)}
     />

       <input 
        type='text'
        name='date'
        placeholder='year'
        onChange={(e)=> setDate(e.target.value)}
    
     />
   </form>    
     
   )

}

=======
import React, { useState } from 'react'

const InputForm = (props)=>{
   const [title, setTitle] = useState('')
   const [date, setDate] = useState('')
   const [movie, setMovie] = useState({})


   function submit(e){
      e.preventDefault()
      const newMovie = {title: title, date: date}
      setMovie({...newMovie})
   }

   
 
   
   return(
   <form onSubmit={submit} >
       <input 
        type='text'
        name='title'
        placeholder='title'
        required
        onChange={(e)=> setTitle(e.target.value)}
     />

       <input 
        type='text'
        name='date'
        placeholder='year'
        onChange={(e)=> setDate(e.target.value)}
    
     />
   </form>    
     
   )

}

>>>>>>> 4471704e7fda23148890485c9a5cf9d04267fa14
export default InputForm