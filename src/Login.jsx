import  "bootstrap/dist/css/bootstrap.css";
//import React from "react";
import "./Login.css";
import React, {Component} from 'react';
import Logowelcome from './Icon.png'

class Login  extends Component {
    render() {
        return (
            <div className="main-body">
                <div>
            <h2 className="title">Choose Youre 
            <br/>The Best Skincare</h2>
            
            <img className="image" src={Logowelcome} alt="logo"/>
            </div>
                <div className="body">
                <div className='font-poppins'>
                <h3>Hi, Welcome Back!</h3>
                <input type="text" className="username" placeholder="Username"/>
                <input type="text" className="password" placeholder="Password"/>
            </div>
                </div>
            </div> 
        );
    }
}
export default Login;
