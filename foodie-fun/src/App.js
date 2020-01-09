import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

//Imported Components
import Login from './components/Login';
import Register from './components/Register'
import Dashboard from './components/dashboard'
import RestaurantList  from './components/restaurantList';
import RestaurantForm from './components/restaurantForm';
import DishForm from './components/dishForm';
import PrivateRoute from './components/PrivateRoute';
//Styles
import './styles/App.css';
import styled from 'styled-components';

// function Signup(props) {
//   return <h1>Signup/login</h1>
// }
// function Home(props) {
//   return <h1>Home</h1>
// }

// function Back(props) {
//   return <h1>Back</h1>
// }

function App() {
  return (
    <div className="App">
    <NavBar>
          <Link to ='/'> Login </Link>

          <Link to ='/dashboard'>Home</Link>
       
          {/* <Link to ='/restaurant'>Add New Restaurant</Link> */}
       
          <Link to ='/newdish'>New Dish</Link>
          
          <Link to ='/restaurants'>Favorites</Link>
          
       
    </NavBar>

      <Switch>

        <Route exact path='/' component={Login} /> 

        <Route path='/signup' component={Register} />
        
        {/* Private Routes*/}
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/restaurant' component={RestaurantForm}/>
        <PrivateRoute path='/newdish' component={DishForm} />
        <PrivateRoute path='/restaurants' component={RestaurantList} />


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