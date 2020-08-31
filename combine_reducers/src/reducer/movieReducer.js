
let id = 0;

const movieState = {
    movie:[]
}

export function movieReducer(state = movieState, action){
    
    switch(action.type){
        case'ADD_MOVIE':
         return{
            ...state,
           movie:[...state.movie, ++id, action.payload.title, action.payload.genre ]
            
         } 

        case 'REMOVE_MOVIE':
           const updateMovie = state.movie.filter(movies => movies.id !== action.payload.id)
            return {
                ...state,
                movie: updateMovie
                
            }
 
        case 'GET_MOVIES':
            return{
                ...state
            } 
            default: 
            return state
    }  
    
}

