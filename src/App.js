import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Routes,NavLink } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (

    <ThemeProvider>
    <AuthProvider>
    <Router>

        <ul className='navbar active'>
            <li><NavLink to="/" style={({isActive})=>{return {color: isActive ? 'royalblue': ''}}}>Home</NavLink></li>
            <li><NavLink to="/about" style={({isActive})=>{return {color: isActive ? 'royalblue': ''}}}>About</NavLink></li>
            <li><NavLink to="/contact" style={({isActive})=>{return {color: isActive ? 'royalblue': ''}}}>Contact</NavLink></li>
        </ul>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/blogpost/:id" element={<BlogPost />} />

      </Routes>
    </Router>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;