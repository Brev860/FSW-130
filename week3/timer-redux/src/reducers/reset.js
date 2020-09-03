
const timerState = {
    time: 0,
    started: true
}
const reset = (state = timerState, action) =>{

 switch(action.type){
     case 'RESET':
         return {...state, started: false, time: state.time=0 }
    default :
        return state
      
 }

}

export default reset