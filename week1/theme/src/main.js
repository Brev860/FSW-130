import React from 'react'
import {ThemeConsumer} from './Theme'

const Main = () =>{
    
    return(
       
        <ThemeConsumer>
            {theme => (
                 <div className='main'>
                    <h1 className={theme + '-theme'}>Main Page</h1>
                 </div>
            )}
        </ThemeConsumer>
        
        
    )

}

export default Main