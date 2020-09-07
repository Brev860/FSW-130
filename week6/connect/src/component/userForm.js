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
              <div>
                  <p>{contact.name}, {contact.phone}, {contact.city}</p>
              </div>
          ))}
          <button>Delete</button> 
       </div>
           
        </div>
      )
}
   
}
const mapStateToProps = (state)=>{
    console.log(state)
    return{
        user: state

    }
    
}



// const mapDispatchToProps ={
//     add: addUser,
//     delete: removeUser
// }
export default connect(mapStateToProps, )(Form)