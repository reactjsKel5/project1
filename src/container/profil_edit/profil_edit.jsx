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
                                <div div className="col d-flex justify-content-center">
                                    <div className="form-edit">
                                        <form action="submit">
                                            <label htmlFor="nama" className="form-label ">Nama Lengkap</label>
                                            <input type="text" className="form-control mb-3 mt-2" id="nama_lengkap" name="nama_lengkap" />

                                            <label htmlFor="no-hp" className="form-label ">Nomor Telepon</label>
                                            <input type="text" className="form-control mb-3 " id="no_hp" name="no_hp" />

                                            <label htmlFor="email" className="form-label ">Email</label>
                                            <input type="text" className="form-control mb-3 " id="email" name="email" aria-describedby="emailHelp" />

                                            <label htmlFor="password" className="form-label ">Password</label>
                                            <input type="password" className="form-control mb-3" id="password" name="password" />

                                            <button type="submit" className="btn btn-danger">Hapus</button>
                                            <button type="submit" className="btn btn-success ">Simpan</button>
                                        </form>

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