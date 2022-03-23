import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import {GrHome} from 'react-icons/gr';
import {BiSearch} from 'react-icons/bi';
import {FiHeart} from 'react-icons/fi';
import Avatar from '@material-ui/core/Avatar';


function Footer() {
  return (
    <footer>
         <div className='d-flex justify-content-around align-items-center'>
             <Link to='/posts' className='links'>
                 <GrHome />
             </Link>
             <Link to='/' className='links'>
                 <BiSearch />
             </Link>
             <Link to='/upload' className='links' >
                 <p className='add-post'> + </p>
             </Link>
             <Link to='/' className='links'>
                 <FiHeart />
             </Link>
             <Link to='/' className='links'>
                <Avatar 
                className='avatar'
                alt="Cindy Baker" 
                src='/public/logo-instagram.webp'
                
                />
             </Link>
         </div>
    </footer>
  )
}


export default Footer