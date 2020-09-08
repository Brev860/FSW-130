import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions/action'


class Form extends Component {
    state ={
       
            name:'',
            phone:'',
            city:''
        
    }

changeEvent = e =>{
    const{name,value} = e.target
    this.setState({
        [name]:value})
  
}

submitEvent = e =>{
    e.preventDefault()
    const userData = {name:this.state.name, phone:this.state.phone, city:this.state.city}
    this.props.dispatch(actions.addUser(userData))
   console.log(userData)
    
}
delete = e =>{
    e.preventDefault()
    this.props.dispatch(actions.removeUser())
}



render(){
    

    return(
        <div>
          <form onSubmit={this.submitEvent}>
             <input
              type='text'
              name='name'
              placeholder='name'
              value={this.state.name}
              onChange={this.changeEvent}
              />
              <input
              type='text'
              name='phone'
              placeholder='phone'
              value={this.state.phone}
              onChange={this.changeEvent}
              />
              <input
              type='text'
              name='city'
              placeholder='city'
              value={this.state.city}
              onChange={this.changeEvent}
              />
              <button>Add Contact</button>
              
   
            </form>
        <div>
          {this.props.user.map(contact =>(
              <div className='contact'>
                  <p className='info'><strong>Contact</strong>:<br/>name: <u>{contact.name}</u>,<br/>phone: <u>{contact.phone}</u> , <br/>city: <u>{contact.city}</u></p>
                 
                  <button onClick={this.delete}>Delete</button> 
              </div>
              
          ))}
          
       </div>
           
        </div>
      )
}
   
}
const mapStateToProps = (state)=>{
    console.log(state)
    return{
        user: state.user

    }
    
}



// const mapDispatchToProps ={
//     add: addUser,
//     delete: removeUser
// }
export default connect(mapStateToProps, )(Form)