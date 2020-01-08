import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
          passsword: ''   
      });
  }

    render(){
        return (
            <div className="register">
                <form onSubmit={this.displayLogin}>
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
                        placeholder="New Password"
                        value={this.state.password}
                        onChange ={this.update}           
                        name="password"            
                        />
                    </div>
                    <div className="password">
                     <input 
                      type="password" 
                      placeholder="Confirm Password" 
                      value={this.state.password}
                      onChange={this.update}
                      name="password" 
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