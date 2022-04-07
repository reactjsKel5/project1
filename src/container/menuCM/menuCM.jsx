import React, { Component } from "react";
import Sidebar from "../../component/menubar/sidebar";
import Topbar from "../../component/menubar/topbar";
import './menuCM.css';
import {Link} from "react-router-dom";

class MenuCM extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="main">
                    <Topbar />

                    {/* Tulis content di bawah sini */}
                    <div className="m-5">
                        <div className="information">
                            <h2>College Management.</h2>
                            <p className="sub-title">Membantumu dalam mengelola urusan perkuliahan</p>
                            <div className="row my-5">
                                <div className="col">
                                    <div className="card card-danger task">
                                        <div className="card-body row d-flex mx-3">
                                            <div className="col-auto number align-self-center">
                                                <h1>5</h1>
                                            </div>
                                            <div className="col label align-self-center">
                                                <h4>Task</h4>
                                                <p>Belum terselesaikan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card schedule">
                                        <div className="card-body row d-flex mx-3">
                                            <div className="col-auto number align-self-center">
                                                <h1>4</h1>
                                            </div>
                                            <div className="col label align-self-center">
                                                <h4 className="text-dark">Schedule</h4>
                                                <p>Untuk hari ini</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-danger todolist">
                                        <div className="card-body row d-flex mx-3">
                                            <div className="col-auto number align-self-center">
                                                <h1>3</h1>
                                            </div>
                                            <div className="col label align-self-center">
                                                <h4>Todolist</h4>
                                                <p>Belum terselesaikan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2>Menu.</h2>
                            <div className="row menu my-4">
                                <div className="col">
                                    <Link to="/Notes">
                                        <div className="card menu-notes">
                                            <div className="card-body m-4">
                                                <img src={require("../../img/ic_notes.png")} alt="ic_notes" />
                                                <h3 className="mt-4 mb-2">Notes</h3>
                                                <p>Catatan penting</p>
                                            </div>
                                        </div>
                                        </Link>
                                        </div>

                                <div className="col">
                                    <Link to = "/Schedule">
                                        <div className="card menu-schedule">
                                            <div className="card-body m-4">
                                                <img src={require("../../img/ic_schedule.png")} alt="ic_notes" />
                                                <h3 className="mt-4 mb-2">Schedule</h3>
                                                <p>Jadwal perkuliahan</p>
                                            </div>
                                        </div>
                                        </Link>
                                        </div>
                                        </div>

                            <div className="row menu">
                                <div className="col">
                                    <Link to="/Task">
                                        <div className="card menu-task">
                                            <div className="card-body m-4">
                                                <img src={require("../../img/ic_task.png")} alt="ic_notes" />
                                                <h3 className="mt-4 mb-2">Task</h3>
                                                <p>Daftar quiz, tugas, dan lainnya</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col">
                                    <Link to="/Todolist">
                                        <div className="card menu-todolist">
                                            <div className="card-body m-4">
                                                <img src={require("../../img/ic_todolist.png")} alt="ic_notes" />
                                                <h3 className="mt-4 mb-2">To do list</h3>
                                                <p>Daftar yang harus dilakukan</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuCM;