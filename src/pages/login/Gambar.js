import React, { Component } from "react";
import './login.css';
import LogoWelcome from './pict_login.png';

class Gambar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col col-left pt-5">
                    <h1>Choose Your The Best Skincare</h1>
                    <img src={LogoWelcome} alt="login image" />
                </div>
            </div>
        );
    }
}

export default Gambar;