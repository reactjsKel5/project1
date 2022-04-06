import React, { Component } from "react";
import Sidebar from "../../component/menubar/sidebar";
import Topbar from "../../component/menubar/topbar";
import './profil_edit.css';
import pict from "./jm2.jpg";

//import  "bootstrap/dist/css/bootstrap.css";

class ProfilEdit extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="main">
                    <Topbar />

                    {/* Tulis content di bawah sini */}
                    <div className="profil_edit">
                        <div className="head">
                            <h2>Edit Profile</h2>
                        </div>
                        <div className="row">
                            <div div className="col d-flex justify-content-center">
                                <div className="card text-center">
                                <div class="image mx-4">
                                <img src={pict} className="m-auto" alt="login image" />
                                <div className="btn">
                                    <button type="submit" className="btn btn-primary ">Ubah Profil</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ProfilEdit;