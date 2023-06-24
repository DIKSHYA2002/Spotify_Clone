import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import {GoHome} from 'react-icons/go'
import {BiSearch} from 'react-icons/bi'
import {BiLibrary} from 'react-icons/bi'
import {BsSuitHeart} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {MdAddCircle} from 'react-icons/md'
import {BiSolidLogInCircle} from 'react-icons/bi'
import { useAuth } from '../context/Auth'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const Navbar = () => {
  const [auth , setAuth] = useAuth();
  const navigate = useNavigate();
  const handlelogout =()=>{
    setAuth({
      ...auth,
      user:null,
      token:'',
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");

  };
 const [nav , setNav] = useState('navbar close');
  const CloseNavbar=()=>{
    if(nav === 'navbar close')
    {
      setNav('navbar');
    }
    else{
      setNav('navbar close');
    }
    
  }
  return (
    <div className={nav}>
        <div className="top">
          <ul className='top-list'>
            <li><NavLink to="/"><GoHome/><span>Home</span></NavLink></li>
            <li><NavLink to="/search"><BiSearch/> <span>Search</span></NavLink></li>
          </ul>
        </div>
        <div className="bottom">
           <ul className='bottom-list'>
            <li  ><NavLink to="/playlists"><BiLibrary /> <span>Library</span> <span className='button' ><BsFillArrowLeftCircleFill id='button' onClick={CloseNavbar}/></span></NavLink></li>
            {
                  !localStorage.getItem("token") ?(
                    <>
                       <li><NavLink to="/login"><BiSolidLogInCircle/> <span>Log in</span></NavLink></li>
                    </>
                  ):(<>
                  <li><NavLink to="/login" onClick={handlelogout}><BiSolidLogInCircle/> <span>Log out</span></NavLink></li>
                  </>)
            }
             <li><NavLink onClick={CloseNavbar}><BsFillArrowRightCircleFill/></NavLink></li>
          </ul>
        </div>
    </div>
   
   
  )
}

export default Navbar