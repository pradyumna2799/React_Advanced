import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const {id} = useParams();
   
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
    <div>
      <h2 style={{ textAlign: 'center' }}>{post.title}</h2> 
      <p style={{ textAlign: 'center' }}>{post.content}</p>
      
    </div>
  )
}

export default BlogPost;
