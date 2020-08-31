
let id = 0;

const tvState = {
    tvShow:[]
}

export function tvReducer(state = tvState, action){
    switch(action.type){
        case'ADD_SHOW':
         return{
            ...state,
           
            tvShow :[...state.tvShow, ++id, action.payload.title, action.payload.genre ]
            
         } 

        case 'REMOVE_SHOW':
           const updateShow = state.tvShow.filter(tv => tv.id !== action.payload.id)
            return {
                ...state,
                tvShow: updateShow
            }

        case 'GET_SHOW':
            return{
                ...state
            } 
            default: 
            return state
    }  
    
}