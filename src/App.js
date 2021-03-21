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
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
