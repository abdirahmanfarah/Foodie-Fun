import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login';
import Register from './components/Register'
//Imported Components
import Dashboard from './components/dashboard'
import RestaurantList  from './components/restaurantList';
import RestaurantForm from './components/restaurantForm';
import DishForm from './components/dishForm';
//Styles
import styled from 'styled-components';
import './styles/App.css';  

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
    <NavBar>
          <Link to ='/dashboard'>Home</Link>
       
          {/* <Link to ='/restaurant'>Add New Restaurant</Link> */}
       
          <Link to ='/newdish'>New Dish</Link>
          
          <Link to ='/favorites'>Favorites</Link>
          
       
    </NavBar>

      <Switch>

      
        <Route exact path='/Home' component={Home} /> 
        <Route exact path='/' component= {Login} /> 
        <Route path='/Register' component={Register} /> 
        
        {/* Private Routes*/}
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/restaurant' component={RestaurantForm}/>
        <Route path='/newdish' component={DishForm} />
        <Route path='/favorites' component={RestaurantList} />


      </Switch>
      
    </div>
  );
}

export default App;


const NavBar = styled.div `
background:orange;  
display:flex;
justify-content:space-around;
align-content:center;
`