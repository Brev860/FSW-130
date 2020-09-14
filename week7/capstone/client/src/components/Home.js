import React from 'react'
import video from '../video/Rick And Morty Slideshow.mp4'
import banner from '../video/rickandmortybanner.png'


const Home = () =>{

   return(
       <div>
           <div className='header'>
           <img className='banner' src={banner} alt='banner' height='80' width='400'/>
               {/* <h1>Rick and Morty Fan Art</h1> */}
               <p>Create your own RNM character</p>
           </div>

           <video width="750" height="500" autoPlay muted loop >
           <source src={video} type="video/mp4"/>
           </video>
       </div>
   )

}

export default Home