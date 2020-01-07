import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './styles/App.css';

//Imported Components
import Dashboard from './components/dashboard'
import RestaurantList  from './components/restaurantList';

function App() {
  return (
    <div className="App">
    <ul>
      <li>
        <Link to ='/dashboard'>Home</Link>
      </li>
    </ul>

      <Switch>

      
        {/* <Route exact path='/' component={} /> */}
        {/* <Route path ='/' component= {Login} /> */}
        {/* <Route path ='/' component={Register} /> */}
        
        {/* Private Routes*/}
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/restaurant' component={RestaurantList} />


      </Switch>
      
    </div>
  );
}

export default App;
