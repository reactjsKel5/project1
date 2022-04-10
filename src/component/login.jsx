import "bootstrap/dist/css/bootstrap.css";
//import React from "react";
import "./login.css";
import React, { Component } from 'react';
import pictLogin from './pict-login.png';
import { useAuth } from "./auth/auth";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {

    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        auth.login("user");
        history.replace(from);
    }

    return (
        <div className="row login">
            <div className="col col-left p-5 text-center d-flex justify-content-center">
                <img src={pictLogin} className="m-auto" alt="login image" />
            </div>
            <div className="col align-self-center d-flex justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <h3>Selamat Datang!</h3>
                        <p>Masukkan email dan password Anda</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Email" className="form-control mb-3 mt-5" id="username" aria-describedby="emailHelp" />
                        <input type="password" placeholder="Password" className="form-control" id="password" />
                        <p className="text-center mt-5">Belum memiliki akun? <Link to="/register"><a>Daftar</a></Link></p>
                        <button type="submit" className="btn btn-primary">Masuk</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

// class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <main>
//                     <div className="row">
//                         <div className="col col-left p-5 text-center d-flex justify-content-center">
//                             <img src={pictLogin} className="m-auto" alt="login image" />
//                         </div>
//                         <div className="col align-self-center d-flex justify-content-center">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h3>Selamat Datang!</h3>
//                                     <p>Masukkan email dan password Anda</p>
//                                 </div>
//                                 <form action="submit">
//                                     <input type="text" placeholder="Email" className="form-control mb-3 mt-5" id="username" aria-describedby="emailHelp" />
//                                     <input type="password" placeholder="Password" className="form-control" id="password" />
//                                     <p className="text-center mt-5">Belum memiliki akun? <a href="#">Daftar</a></p>
//                                     <button type="submit" className="btn btn-primary">Masuk</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         );
//     }
// }
export default Login;
