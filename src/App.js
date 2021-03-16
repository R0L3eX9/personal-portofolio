import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
      <About/> 
      <Router><Work/></Router>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
