export const addMovie = (title, genre) =>({
    
        type:'ADD_MOVIE',
        payload:{
            title,
            genre
        
    }
})

export const removeMovie = (id) =>{
   return{
       type:'REMOVE_MOVIE',
       payload:{
           id
       }
   }
}

export const getMovie = (id) =>{
    return{
        type:'GET_MOVIE',
    }
 }