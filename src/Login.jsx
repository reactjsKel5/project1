import  "bootstrap/dist/css/bootstrap.css";
//import React from "react";
import "./Login.css";
import React, {Component} from 'react';
import Uname from './componen/uname';

class Login  extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="body">
                    <Uname />
                </div>
            </div> 
        );
    }
}
export default Login;
