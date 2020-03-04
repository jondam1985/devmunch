import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './pages/projects-page/projects-page.component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ProjectsPage/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this a another test :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
