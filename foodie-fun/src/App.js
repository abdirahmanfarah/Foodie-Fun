import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

//Imported Components
import Dashboard from './components/dashboard'
import RestaurantList  from './components/restaurantList';
import RestaurantForm from './components/restaurantForm';
import DishForm from './components/dishForm';
//Styles
import styled from 'styled-components';
import './styles/App.css';

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

      
        {/* <Route exact path='/' component={} /> */}
        {/* <Route path ='/' component= {Login} /> */}
        {/* <Route path ='/' component={Register} /> */}
        
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