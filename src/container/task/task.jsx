import React, { Component } from "react";
import Sidebar from "../../component/menubar/sidebar";
// import Task from "../../component/menubar/taskdel";
import Topbar from "../../component/menubar/topbar";
import Taskk from "../../component/task";
import "./task.css";

class Task extends Component {
    state = {
        task: [],
        insertTaskk: {
            id: 1,
            uid: 1,
            jenis: "",
            tgl_ddline: "",
            detail_task: ""
        }
    }

    fetchTask = () => {
        fetch('http://localhost:3001/task?_sort=id_note8&_order=desc')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    task: json
                })
            })
    }

    componentDidMount() {
        this.fetchTask()
    }

    deleteTask = (id_task) => {
        fetch(`http://localhost:3001/task/${id_task}`, {
            method: 'DELETE'
        })
            .then(json => {
                this.fetchTask()
            })
    }

    handleChangeInsert = (event) => {
        let insertTaskData = { ...this.state.insertTaskk };
        let timestamp = new Date().getTime();
        insertTaskData['id'] = timestamp;
        insertTaskData[event.target.name] = event.target.value;
        this.setState({
            insertTaskk: insertTaskData
        });
    }

    insertTask = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/task', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertTaskk)
        })
            .then(response => response.json())
            .then(json => this.fetchTask())
    }
    
    render() {
        return (
        <div>
            <Sidebar/>
            <div className="main">
                <Topbar/>
                
                    <div className="m-md-5">
                        <div className="card-main">
                            <div className="card-body">
                                <form action="submit" className="m-2 row">
                                    <div className="col"><input type="text" className="form-group px-4" name="nama_task" id="nama_task" placeholder="Ketikkan disini ..." onChange={this.handleChangeInsert} />
                                        </div>
                                        <div className="col-md-auto col-sm align-self-center">
                                            <button className="btn btn-danger d-inline-block" >Cari</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>

                            <div className="row">
                            <div className="col-md-5 col-sm-10 mb-2">
                                <div className="card-min">
                                    <div className="card-body my-4 mx-3">
                                        <form action="submit" className="m-2 col">
                                        <div className="col">
                                        <select class="form-select text-secondary" name="jenis" id="jenis" onChange={this.handleChangeInsert}>
                                <option value="Quiz">Quiz</option>
                                <option value="Assignment">Assignment</option>
                            </select>
                            <div className="m-2 row">
                                            </div>
                                            <input type="date" className="form-control px-4" name="tgl_ddline" id="tgl_ddline" onChange={this.handleChangeInsert}/>
                                            <div className="m-2 row">
                                            </div>
                                            <textarea type="text" className="form-control px-4" placeholder="Detail" name="detail_task" id="detail_task" onChange={this.handleChangeInsert}/>
                                            <div className="m-3 row">
                                            <button className="btn btn-primary d-inline-block" onClick={this.insertTask}>Tambah</button></div>
                                        </div>
                                        </form>
                                        </div>
                                </div>
                            </div>

                    <div className="col-md-5 col-sm-5 mb-2">
                            <div className="card-max">
                                <div className="card-body">
                                    <div className="col d-flex">
                                        <div className="col">
                                        {
                                        this.state.task.map(taskk=> {
                                            return <Taskk key={taskk.id} uid={taskk.uid} jenis={taskk.jenis} tgl_ddline={taskk.tgl_ddline} detail_task={taskk.detail_task} id={taskk.id} delete={this.deleteTask}/>
                                        })
                                        }
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

export default Task;