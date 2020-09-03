import React from 'react'

import {ContextConsumer} from '../context/context'


const Output = () =>{

    return(
        <div>
            <ContextConsumer>
                {input => {
                    return(
                        <div>
                            {[input].map(thing =>{
                                return(
                                    <div>
                                       <h2>{thing.title}</h2>
                                        <p>{thing.discription}</p>
                                        <img src={thing.imgUrl} alt='thing' width={300}/>
                                    </div>
                                
                                )
                            })}
                        </div>
                    )
                }}
            </ContextConsumer>
            
        </div>
    )
}

export default Output