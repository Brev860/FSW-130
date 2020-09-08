export const addUser = ({name, phone, city}) =>{
    return{
        type:'ADD_USER',
        payload:{
            name,
            phone,
            city
        }
    }
}

export const removeUser = (name) =>{
    return{
        type:'REMOVE_USER',
        payload: name
    }
}