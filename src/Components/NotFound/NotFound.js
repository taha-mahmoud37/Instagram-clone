import React from 'react';
import './notFound.css';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <section className='not-found py-5 container'>
       <h2>Sorry, this page isn't available.</h2>
       <div>
          The link you followed may be broken, or the page may have been removed.
           <Link className='text-decoration-none' to={'/posts'}> <span  className='back-home'>Go back to Instagram.</span> </Link> 
       </div>

    </section>
  )
}


export default NotFound