import React, { Component } from "react";
import Sidebar from "../component/menubar/sidebar";
import Topbar from "../component/menubar/topbar";
import './profil.css'

import ProfileProps from "./profil.props/profilprops";

class Profil extends Component {

    state = {
        profile: [],

    }

    fetchProfile = () => {
        fetch('http://localhost:3001/profile')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    profile: json
                })
            })
    }

    componentDidMount() {
        this.fetchProfile()
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div className="main">
                    <Topbar />
                    <div className="m-md-5">
                        <div className="row">
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-12 text-center">
                                        <img src={require('../img/profile1.png')} width="10%" alt="profile" />
                                    </div>
                                    <br />
                                    <div class="card-text">
                                        <div className="row">
                                            {
                                                this.state.profile.map((profile) => {
                                                    return <ProfileProps id={profile.id} key={profile.id} nama_lengkap={profile.nama_lengkap} email={profile.email} no_hp={profile.no_hp} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center" >
                            <button className="btn btn-danger d-inline-block">Edit Profil</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profil;