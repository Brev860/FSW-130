
const timerState = {
    time:0,
    started: true
}

const pause = (state = timerState, action) =>{

 switch(action.type){
     case 'PAUSE':
            return {...state, started: false }   
     default:
            return state      
        }    
        
}

export default pause