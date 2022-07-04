import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Werk from './Werk';
import Website from './Website';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Home />
        <About />
        <Skills />
        <Werk />
        <Website />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
