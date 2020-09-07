
let id = 0

export const userReducer = (state = [], action) =>{
  switch(action.type){
      case 'ADD_USER':
          return[
              ...state,
              {
               id: ++id,
               name: action.payload.name,
               phone: action.payload.phone,
               city: action.payload.city}
          ]
  }
}