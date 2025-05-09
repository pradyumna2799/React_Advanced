import React from 'react';
import { useUserContext } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { user,login,logout } = useUserContext();
  const {theme,toggleTheme} = useTheme();
  return (
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'flex-start',
      paddingTop: '30px',
      backgroundColor: theme === 'light' ? 'white': '#001540',minHeight: '100vh'}}>
    
        <button style={{backgroundColor: 'green',color: 'white',borderRadius: '5px'}}  onClick={()=>toggleTheme()}>Toggle theme</button>
       
        {user.loggedIn ? (
          <>
          <h1 style={{ textAlign: 'center',color: '#673AB7' }}>Welcome, {user.name}!</h1>
          <button style={{backgroundColor: '#008CBA',color: 'white',borderRadius: '5px'}} onClick={()=>logout()}>Log Out</button> 
          </>)
          :<h1 style={{color: '#DC143C'}}>Please Log in</h1>}
  
          <button style={{backgroundColor: '#008CBA',color: 'white',borderRadius: '5px'}}   onClick={()=>login('user')}>Login</button>


      <h2 style={{ textAlign: 'center',color: 'orange'}}>Contact us Page</h2>
      <p style={{ textAlign: 'center',color: 'red' }}>This is our contact us page.</p>
 
    </div>
  )
}

export default Contact;