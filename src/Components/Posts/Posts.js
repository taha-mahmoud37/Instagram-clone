import React, {useState, useEffect} from 'react';
import './posts.css';
import Post from '../OnePost/Post';
import { db } from '../../Firebase';
import { collection, onSnapshot} from 'firebase/firestore';

// post is component for dispaly data passed from firebase
// here we used OnSanpshot to take snapshot from data and pass it to OnePost component and display it in browser
// we use useState as array for push data that return from firebase


function Posts() {

  
  const [posts, setPosts] = useState([])
  

  useEffect(() => {
   const unsubscribe =  onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })))
      console.log(snapshot.docs.map(doc => doc.data()))

    })
    
    return () => {
      unsubscribe();
    } 
  }, [])


  

  return (
    <div>
        {
          posts.map((post, id)=> 
          (
            
            <Post key={id} userName = {post.username} imgUrl = {post.imgUrl} caption = {post.caption} /> 
          ))
        } 
    </div>
  )
}

export default Posts