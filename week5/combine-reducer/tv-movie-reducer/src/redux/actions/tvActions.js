
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

export const getShows = (id) =>{
    return{
        type:'GET_SHOWS',
        payload:{
            id
        }
    }
}