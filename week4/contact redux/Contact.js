const redux = require('redux')

const addUserName = (name) =>{
    return{
        type: 'ADD_USER_NAME',
        payload: name
    }
}

const addUserPhone = (phone) =>{
    return{
        type: 'ADD_USER_PHONE',
        payload: phone
    }
}
const addUserAddress = (street, city, zip) =>{
    return{
        type: 'ADD_USER_ADDRESS',
        payload:
        street,
        city,
        zip
    }     
    
}

const userForm = {
     name:'',
     phone:'',
     address:[]
}

const userReducer = (state = userForm, action) =>{
    switch(action.type){
        case 'ADD_USER_NAME':
            return{
                ...state, 
                name: action.payload
            }
       case 'ADD_USER_PHONE':
           return{
               ...state,
               phone: [...state.phone, action.payload]
           }
     case 'ADD_USER_ADDRESS':
         return{
             ...state,
             address: [...state.address, action.payload]
         }
         default:
         return state
    }
}

const store = redux.createStore(userReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addUserName('Mike Tyson'))
store.dispatch(addUserPhone('860-999-9999'))
store.dispatch(addUserAddress(['555 Stone Drive','Hartford','06105']))
