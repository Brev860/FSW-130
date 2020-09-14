import React from 'react'
import {Link} from 'react-router-dom'
import banner from '../video/rickandmortybanner.png'

const Nav = () =>{

    return(
        <ul>
            
            <Link to='/resources' className='link'><li className='navitem'>Resources</li></Link>
            <Link to='/characters' className='link'><li className='navitem'>Create Character</li></Link>
            <Link to='/' className='link'><li className='navitem'>Home</li></Link>
        </ul>
    )
}
export default Nav