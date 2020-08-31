export const addMovie = (title, genre) =>{
     return{
         type:'ADD_MOVIE',
         payload:{
             title,
             genre
         }
     }
}

export const removeMovie = (id) =>{
    return{
        type:'REMOVE_MOVIE',
        payload: id
    }
}
export const getMovie = () =>{
    return{
        type:'GET_MOVIE'
    }
}

export const addShow = (title, genre) =>{
    return{
        type:'ADD_SHOW',
        payload:{
            title,
            genre
        }
    }
    
}

export const removeShow = (id) =>{
    return{
        type:'REMOVE_SHOW',
        payload:{
            id
        }
    }
}
export const getShow = () =>{
    return{
        type:'GET_SHOW'
    }
}