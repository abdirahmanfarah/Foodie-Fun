import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './styles/App.css';


function App() {
  return (
    <div className="App">
    <header className="App-header">
     <BrowserRouter>
     <Link to='/'>Signup/login</Link>
     <Link to= '/Home'>Home</Link>
     <Link to='/Back'>Back</Link>
     </BrowserRouter>
     </header>
     </div>
  );
}

export default App;
