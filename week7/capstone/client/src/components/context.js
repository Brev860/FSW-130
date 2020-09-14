import React, {Component} from  'react'
import {createContext} from 'react'
import axios from 'axios'


const {Provider, Consumer} = createContext()

class CharacterContext extends Component{
 state={
     name:'',
     image:'',
     species:'',
     gender:'',
     status:'',
     characters:[]
 }

 componentDidMount(){
     axios.get('https://rickandmortyapi.com/api/character')
     .then(res =>{
         console.log(res)
         this.setState({characters: res.data.results.slice(0,9)})
         console.log(this.state.characters)
     })
 }


 
 eventSubmit = (char) =>{
     console.log(char)
     this.setState(prev => ({characters: [
        ...prev.characters, char]}))
 }

  

    render(){
        const {characters} = this.state
        const submit = this.eventSubmit
       
        console.log(characters)
        
        
        return(
            
            <div> 
                <Provider value={{
                     characters: characters,
                     submit: submit}}>
                    {this.props.children}               
                </Provider>

               
            </div>
        )
    }
}
export  {CharacterContext, Consumer as CharacterContextConsumer}