import React from 'react';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const BlogPost = () => {
    const {id} = useParams();
    const { user,login,logout } = useUserContext();
    const {theme,toggleTheme} = useTheme();
   
    // An object containing blog posts. Each post has an 'id' as key
    const posts = {
      '1': {
        title: 'My First Blog Post',
        content: "Today I started learning React. It's fun to build components!"
      },
      '2': {
      title: 'Learning Routing',
      content: "Now I'm learning how to navigate pages using React Router."
    }
    }

     // Get the post based on the 'id' from the URL
    const post = posts[id];

    // If no post is found for the given 'id', show a message
    if (!post) return <h2 style={{textAlign: 'center'}}>Post not found</h2>

  return (
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'flex-start',
      paddingTop: '30px',
      backgroundColor: theme === 'light' ? 'white': '#001540',minHeight: '100vh'}}>
   
        <button style={{backgroundColor: 'green',color: 'white',borderRadius: '5px'}} onClick={()=>toggleTheme()}>Toggle theme</button>
     
        {user.loggedIn ? (
          <>
          <h1 style={{ textAlign: 'center',color: '#673AB7' }}>Welcome, {user.name}!</h1>
          <button style={{backgroundColor: '#008CBA',color: 'white',borderRadius: '5px'}} onClick={()=>logout()}>Log Out</button> 
          </>)
          :<h1 style={{color: '#DC143C'}}>Please Log in</h1>}
  
          <button style={{backgroundColor: '#008CBA',color: 'white',borderRadius: '5px'}}   onClick={()=>login('user')}>Login</button>

      <h2 style={{ textAlign: 'center',color: 'orange'}}>{post.title}</h2> 
      <p style={{ textAlign: 'center',color: 'red' }}>{post.content}</p>
      
    </div>
  )
}

export default BlogPost;