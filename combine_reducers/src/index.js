import store from './store'
import * as action from './action/action'





const updateStoreAdd = (input1, input2) =>{
    return function (action){
          store.dispatch(action(input1, input2))
        
    }
}

const updateStoreRemove = (input) =>{
    return function (action){
          store.dispatch(action(input))
        
    }
}

const updateStoreGet = () =>{
    return function (action){
          store.dispatch(action())
        
    }
}


updateStoreAdd('Die Hard', 'Action')(action.addMovie)
updateStoreAdd('Preditor', 'Action')(action.addMovie)
updateStoreAdd('The Anchorman', 'Comedy')(action.addMovie)
updateStoreAdd('Ave Ventura', 'Comedy')(action.addMovie)
updateStoreRemove(4)(action.removeMovie)
updateStoreGet()(action.getMovie)

updateStoreAdd('Night Rider', 'Action/Sci-Fi')(action.addShow)
updateStoreAdd('Cops', 'Action')(action.addShow)
updateStoreAdd('Community', 'Comedy')(action.addShow)
updateStoreAdd('30 Rock', 'Comedy')(action.addShow)
updateStoreRemove(1)(action.removeShow)
updateStoreGet()(action.getShow)




// store.subscribe(() =>{
//     console.log('Store Changed', store.getState())
// })




