import './App.css';
import Intro from './components/Intro/Intro';
import Toggle from './components/Toggle/Toggle';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import { useContext } from 'react';
import { ThemeContext } from './context';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';



function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div style={{
      backgroundColor: darkMode ? '#222' : 'white',
      color: darkMode && 'white'
    }}>

      <Toggle />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>


  );
}

export default App;
