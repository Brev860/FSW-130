import React from 'react'
import {CharacterContextConsumer} from './context'
import Input from './input'


const Output = (props) =>{

    

  
    return(
        <div>
       
           <div className='header'>
             <h1>Create Your Character</h1>
            <p>Add your own character to the list of current characters below.</p>
           
            

           <Input/>
           <CharacterContextConsumer>
              {({characters}) =>{ 
                
                 return (
                 characters.map(char =>(
                    <div className='charList'>
                        
                        <ol>
                          <li></li>
                          <li className="list"><img className='charimage' src={char.image} alt='img' height='200' /> Name: {char.name}</li>
                          <li className="list"> Species: {char.species}</li>
                          <li className="list"> Gender: {char.gender}</li>
                          <li className="list"> Status: {char.status}</li>
                        </ol>
                           
                    </div>
                ))
                 )}}
          </CharacterContextConsumer>
          </div>
        </div>
      
    )
}

export default Output