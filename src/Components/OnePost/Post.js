import React from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";



function Post({ userName, imgUrl, caption, userId }) {

  
 /* const display = () => { 
    let deleteElm = document.querySelector('.popup') 
    deleteElm.classList.toggle('show')
    console.log(deleteElm)  
 } */
 

 /* const count = (userId) => {
  deleteDoc(doc(db, 'posts', userId))
 }
 */
  return (
    <section
      className="posts py-3 my-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container-m">
            {/*header => avater + username*/}
          <div className="posts-header d-flex align-items-center">
            <Avatar
              className="avatar"
              alt="Cindy Baker"
              src={imgUrl}
            />
            <h3> {userName} </h3>
          </div>
          <button className='delete'>
                <p>...</p>
          </button>
          {/* <button onClick={() => count(userId)} className='popup'>
            delete
          </button> */}
          
          {/*body => image */}
          <div className="postes-imge">
            <img className="img-body" src={imgUrl} alt="logo" />
          </div>
          <div className="interaction pt-3">
            <BsHeart className="icon " />
            <FaRegComment className="icon" />
            <FiSend className="icon" />
          </div>

          {/*footer => username + caption */}
          <div className="footer">
            <h4>
              {" "}
              <strong>{userName}</strong> {caption}{" "}
            </h4>
          </div>
      </div>
      
    </section>
  );
}

export default Post;
