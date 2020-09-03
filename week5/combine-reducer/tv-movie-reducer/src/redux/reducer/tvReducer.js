let id = 0;
const tvState = {
    tvShow:{

    }
}



export function tvReducer(state = tvState, action){
    switch(action.type){
        case'ADD_SHOW':
         return{
            ...state,
            tvShow:{
                id: ++id,
                title: action.payload.title,
                genre: action.payload.genre
            }
         }
             
         

        case 'REMOVE_SHOW':
           const updatedShows = state.tvShow.filter(show => show.id !== action.payload.id)
            return {
                ...state,
                tvShow: updatedShows
            }

        case 'GET_SHOW':
            return{
                ...state
            } 
            default: 
            return state
            
    }  
}