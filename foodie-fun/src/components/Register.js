import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { axiosWithAu } from '../utils/axiosWithAuth';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends Component {
   constructor(props) {
    super(props);

    this.state={
        username: '',
        email:'',
        password:''
    }
   this.update = this.update.bind(this);

   this.displayLogin = this.displayLogin.bind(this);

}

 register = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/auth/signup', this.state)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('token', res.data.payload)
          console.log(res)
        })
        .catch(err => console.log(err))
  }
  
  
       update(e) {

            let name = e.target.name;
            let value = e.target.value;
            this.setState({
                [name]: value
            });
            }
    displayLogin(e) {
     e.preventDefault();
                console.log('You have successfully registered');
                console.log(this.state);
                this.setState({
                    username: '',
                    email: '',
                    passsword: '',
                    location: ''
                });
            }

    render(){
        return (
            <div className="register">
                <form onSubmit={this.register}>
                    <h2>Register</h2>
                    <div className='name'>
                 <input
                        type="text"
                        placeholder="Create Username"
                        name="username" 
                        value={this.state.username}
                        onChange ={this.update}           
                                   
                  />                                           
                    </div>
                    <div className="email">
                        <input 
                        type="text"
                        placeholder="Enter your email"
                        name="email" 
                        value={this.state.email}
                        onChange ={this.update}   
                        />
                    </div>
                    <div className="password">   
                        <input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange ={this.update}           
                        name="password"            
                        />
                    </div>
                    <div className="password">
                     <input 
                      type="location" 
                      placeholder="location" 
                      value={this.state.location}
                      onChange={this.update}
                      name="location" 
                      />
					</div>
                     <div>
                         <button className='Register'>Register</button>
                     </div>
                </form>
                <button className='link-btn'>
                <Link to="/">Log in Here</Link>
                </button>
            </div>
        )

        

    };
}    
export default Login;