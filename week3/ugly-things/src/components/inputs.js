import React, { useState,useContext } from 'react'
import InputForm from './inputForm'


const initThings = {title:'', descriptions:'', imgUrl: ''}



const Input = () =>{

    const [input, setInput] = useState(initThings)
    
  

   const change = (e) =>{
       const [name, value] = e.target

       setInput(prevState =>({
           ...prevState,
           [name]: value
       }))
   }

   const submit = (e) =>{
      e.preventDefault()
     
   }

   
   return(
       <div>
         <h1>Ugly Things</h1>
         <InputForm
            changeEvent={change}
            submit={submit}
            input={input}
         />
       </div>

   )

}

export default Input