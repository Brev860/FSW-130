import React from 'react'
import {ThemeConsumer} from './Theme'


const Nav = (props)=>{

    return(
       

<ThemeConsumer>
{theme => (
     <div className='nav'>
     <nav className={theme + '-theme'}>
         <li>Home</li>
         <li>About</li>
         <li>Contact</li>

     </nav>
 </div>
)}
</ThemeConsumer>

    )
}

export default Nav