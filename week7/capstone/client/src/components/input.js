import React from 'react'
import {useState} from 'react'

import {CharacterContextConsumer} from './context'


const Input = () =>{


 const [name, setName] = useState('')
 const [gender, setGender] = useState('')
 const [species, setSpecies] = useState('')
 const [image, setImage] = useState('')
 const [status, setStatus] = useState('')
//  const [character, setCharacter] = useState({})



  
    return(
      <div>
          <CharacterContextConsumer>
                {consumer =>(<form onSubmit={(e) =>{  
                  e.preventDefault()
                  const newCharacter = {name: name, species: species, gender: gender, image: image, status: status}
                //    setCharacter(newCharacter)
                  consumer.submit(newCharacter)
                  }}>
        <input
            type='text'
            name='name'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <input
            type='text'
            name='species'
            placeholder='species'
            value={species}
            onChange={(e) => setSpecies(e.target.value)}/>
            <input
            type='text'
            name='gender'
            placeholder='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}/>
            <input
            type='text'
            name='image'
            placeholder='image url'
            value={image}
            onChange={(e) => setImage(e.target.value)}/>
            <input
            type='text'
            name='status'
            placeholder='status'
            value={status}
            onChange={(e) => setStatus(e.target.value)}/>

          <button>Submit</button>
        </form>
        )}</CharacterContextConsumer>
          
          
          
      </div>
    )
    
}

export default Input