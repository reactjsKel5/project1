import  "bootstrap/dist/css/bootstrap.css";
//import React from "react";
import "./Login.css";
import React, {Component} from 'react';
import Uname from './componen/uname';
import Gambar from "./componen/Gambar";

class Login  extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="body">
                    <Uname />
                    <Gambar/>
                </div>
            </div> 
        );
    }
}
export default Login;
