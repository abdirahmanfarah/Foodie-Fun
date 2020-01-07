import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
   constructor(props) {
    super(props);

    this.state={
        fullname: '',
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
          fullname: '',
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
                        placeholder="Full Name"
                        name="fullname" 
                        value={this.state.fullname}
                        onChange ={this.update}           
                                   
                  />                                           
                    </div>
                    <div className="email">
                        <input 
                        type="text"
                        placeholder="Enter your email"
                        name="email" 
                        value={this.state.fullname}
                        onChange ={this.update}   
                        />
                    </div>
                    <div className="password">   
                        <input
                        type="password"
                        placeholder="Password..."
                        value={this.state.password}
                        onChange ={this.update}           
                        name="password"            
                        />
                    </div>
                    <div className="password">
						<input type="password" placeholder="Confirm Password" name="password" />
					</div>
                    
                    <input type="submit" value="Submit"/>
                </form>

                <Link to="/">Log in Here</Link>
            </div>
        )

    };
}    
export default Login;