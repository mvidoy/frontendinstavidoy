import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

//import logo from './logo.svg';
//import './App.css';

/* REMOVE TUDO DA <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
*/

//Componente que irá retornar um conteúdo jsx (html). Trecho de código que consegue isolar da aplicação estrutural.
function App() {
  return (
    //<div className="App"> 
    //  <h1>Hello World</h1>
    //</div>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;