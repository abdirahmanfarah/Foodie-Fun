import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
                <form onSubmit={this.displayLogin}>
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
                 <Link to="/Register">Sign up</Link>
                 </button> 
            </div>
        )

    };
}    

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
export default Login;