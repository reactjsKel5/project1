import  "bootstrap/dist/css/bootstrap.css";
//import React from "react";
import "./pages/login/login.css";
import React, {Component} from 'react';
import Gambar from "./pages/login/Gambar";
import Uname from './pages/login/uname';
import Passw from "./pages/login/passw";
import LoginBtn from "./pages/login/loginbtn";

class Login  extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="row">
                    <div className="col col-left pt-5">
                        <Gambar/>
                    </div>
                    <div className="col col-right pt-5 pb-m-5">
                        <div className="container-right">
                        <div className="card">
                            <div className="card-body">
                            <h3 className="mb-5">Hi, Welcome Back!</h3>
                            <form action="submit">
                                <Uname/>
                                <Passw/>
                                <LoginBtn/>
                            </form>
                            </div>
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
