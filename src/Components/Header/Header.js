import React from 'react'
import './header.css';
import {BiCamera} from 'react-icons/bi';
import {RiMessengerLine} from 'react-icons/ri';


function Header() {
  return (
    <div className='header-main'>
     <div className='container header py-3 d-flex justify-content-around align-items-center '>
        <BiCamera  className='size'/>
        <img 
        className='app-logo'
        src='/images/instagran-log.png' 
        alt='instagram-logo' 

        />
        <RiMessengerLine className='size'/>
     </div>

    </div>
  )
}

export default Header