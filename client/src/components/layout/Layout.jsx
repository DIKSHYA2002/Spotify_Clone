import React from 'react'
import Navbar from './Navbar'
import Music_Player from '../pages/MusicPlayer/Music_Player'
const Layout = (props) => {
  return (
    <div className='rooot'>
       <Navbar/>
        {props.children}
        <Music_Player/>
    </div>
  )
}

export default Layout