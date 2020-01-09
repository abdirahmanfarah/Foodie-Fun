import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//Imports

class Login extends Component {
   constructor(props) {
    super(props);

    this.state={
        username:'',
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

login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/auth/login', this.state)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
     this.props.history.push('/dashboard')
    })
    .catch(err => console.log('Error', err))
}

displayLogin(e) {
      e.preventDefault();
      console.log('You are logged in');
      console.log(this.state);
      this.setState({
          username: '',
          passsword: ''
      });
  }

    render(){
        return (
            <div className="login">
                <form onSubmit={this.login}>
                    <h2>Login</h2>
                    <div className='username'>
                        <input
                        type="text"
                        placeholder="Username"
                        value={this.state.email}
                        onChange={this.update}
                        name="username"
                        />
                     </div>   
                     <div className="password">   
                        <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange ={this.update}           
                        name="password"            
                        />
                    </div>
                    <Button>Login</Button>               
                    
                    
                </form>

                <button className='link-btn'>
                 <Link to="/signup">Sign up</Link>
                 </button> 
            </div>
        )

    };
}    
export default Login;

const Button = styled.button`
width: 100px;
font-size: 1.3rem;
border: none;
border-radius: 13px;
background: #FFA500;
&:hover{
   background : #C45228;
}
`