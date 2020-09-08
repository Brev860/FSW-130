
// let id = 0

export const userReducer = (state = [], action) =>{
  switch(action.type){
      case 'ADD_USER':
          return[
              ...state,{...action.payload}]
      case 'REMOVE_USER':
      return[
      state.filter(contact => contact !== contact.name )]
          default:
            return state
  }
}