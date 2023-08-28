import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes'
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects'
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width:100%;
height:100%;
overflow-x:hidden;`;

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(252, 91, 228, 0.15) 0%, rgba(255, 0, 255, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);

`

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects />
          <Wrapper>
          </Wrapper>
        </Body>
      </ThemeProvider>
    </Router>

  );
}

export default App;
