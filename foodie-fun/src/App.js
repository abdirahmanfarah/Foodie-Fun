import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login';
import Register from './components/Register'

function Signup(props) {
  return <h1>Signup/login</h1>
}
function Home(props) {
  return <h1>Home</h1>
}

function Back(props) {
  return <h1>Back</h1>
}

function App() {
  return (
    <div className="App">
    <header className="App-header">
     <BrowserRouter>
     <Link to='/'>login</Link> 
     <Link to='/Register'>Register</Link> 
     <Link to= '/Home'>Home</Link>
     <Link to='/Back'>Back</Link>

     <Route exact path='/' component={Login}/> 
     <Route exact path='/Register' component={Register}/> 
     <Route path='/Home' component={Home}/>
     <Route path='/Back' component={Back}/>

     </BrowserRouter>
     </header>
     </div>
  );
}

export default App;
