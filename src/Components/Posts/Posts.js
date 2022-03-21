import React, {useState, useEffect} from 'react';
import './posts.css';
import Post from '../OnePost/Post';
import { db } from '../../Firebase';
import { collection, onSnapshot} from 'firebase/firestore';

function Posts() {

  const [posts, setPosts] = useState([])
  

  useEffect(() => {
    onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })))
      console.log(snapshot.docs.map(doc => doc.data()))

    })
  }, [])


  

  return (
    <div>
        {
          posts.map((post, id)=> 
          (
            <Post key={id} userId = {id} userName = {post.username} imgUrl = {post.imgUrl} caption = {post.caption} /> 
          ))
        } 
    </div>
  )
}

export default Posts