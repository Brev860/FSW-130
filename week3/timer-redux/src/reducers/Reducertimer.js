

const timerState = {
    sec :0,
    time:'',
    started : true ,
   
}


const computeTime = (totalSecondsPassed)=>{

    let totalMinutesPassed = totalSecondsPassed?   Math.floor(totalSecondsPassed/60) :0
    let hours = Math.floor(totalMinutesPassed/60)
    let mins = totalMinutesPassed % 60
    let secs = totalSecondsPassed
    
    return `${hours}: ${mins}: ${secs}`
}
const snooz = ()=> `ZzzzzzzzzzZ`

const processTime = () =>setInterval(() => {

        if(timerState.started){
            Object.assign(timerState, {sec:timerState.sec+1, time: computeTime(timerState.sec)})   
        }   
    }, 1000)

const timer = (state = timerState, action) =>{
  
    switch(action.type){
       
        case ('START'):
           processTime()      
            return  {...state,
                       started : !state.started ? true : true ,
                       sec: state.sec+1,
                       time: computeTime(state.sec) 
                    }           
        case('PAUSE'):
            return  {...state,
                        started : state.started ? false : false ,
                        time: snooz() 
                    }
         case('RESET'):
            return {...state,
                      started: state.started = false,
                      sec:0 ,
                      time:''
                    }
         default:
            return state
    }

}

export default timer