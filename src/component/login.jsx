// import  "bootstrap/dist/css/bootstrap.css";
//import React from "react";
import "./login.css";
import React, {Component} from 'react';
import pictLogin from './pict-login.png';

class Login  extends Component {
    render() {  
        return (
            <div>
                <main>
                    <div className="row">
                        <div className="col col-left p-5 text-center d-flex justify-content-center">
                        <img src={pictLogin} className="m-auto" alt="login image" />
                        </div>
                        <div className="col align-self-center d-flex justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <h3>Selamat Datang!</h3>
                                <p>Masukkan email dan password Anda</p>    
                            </div>                        
                        </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
export default Login;
