<<<<<<< HEAD
import React from 'react'
import {InputContextConsumer} from './InputContext'

const Output = (props)=>{
  console.log(props)
    return(
       <div className='output'>
        <InputContextConsumer>
          {title =>(
            <div className='box'>{title}</div>
          )}
       
        </InputContextConsumer>
          
       </div>
    
        
    )
}

=======
import React from 'react'
import {InputContextConsumer} from './InputContext'

const Output = (props)=>{
  console.log(props)
    return(
       <div className='output'>
        <InputContextConsumer>
          {title =>(
            <div className='box'>{title}</div>
          )}
       
        </InputContextConsumer>
          
       </div>
    
        
    )
}

>>>>>>> 4471704e7fda23148890485c9a5cf9d04267fa14
export default Output