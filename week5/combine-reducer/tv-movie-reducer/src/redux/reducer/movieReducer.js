

const movieState = {
         id: 0,
         title:'Die Hard',
         genre: 'Action'
}


    
    

export function movieReducer(state = movieState, action){

    switch(action.type){
         
        case'ADD_MOVIE':
         return{
            ...state,
               id: ++state.id,
                title: action.payload.title,
                genre: action.payload.genre
         } 

        case 'REMOVE_MOVIE':
           const updatedMovie = state.movie.filter(movie => movie.id === action.payload.id)
            return {
                ...state,
                contact: updatedMovie
            }
            
            

        case 'GET_MOVIES':
            return{
                ...state
            } 
            default:
                return state
          
    }  
    
}