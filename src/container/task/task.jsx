import React, { Component } from "react";
import Sidebar from "../../component/menubar/sidebar";
// import Task from "../../component/menubar/taskdel";
import Topbar from "../../component/menubar/topbar";
import "./task.css";

class Taskk extends Component {
    state = {
        task: [],
        insertTask: {
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

    deleteTask = () => {
        fetch(`http://localhost:3001/task`, {
            method: 'DELETE'
        })
            .then(json => {
                this.fetchTask()
            })
    }

    handleChangeInsert = (event) => {
        let insertTasktData = { ...this.state.inserttask };
        let timestamp = new Date().getTime();
        insertTasktData['id'] = timestamp;
        insertTasktData[event.target.name] = event.target.value;
        this.setState({
            inserttask: insertTasktData
        });
    }

    insertTodolist = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/task', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.inserttask)
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
                        <div className="add-todolist">
                            <div className="card">
                                <div className="card-body">
                                    <form action="submit" className="m-2 row">
                                        <div className="col">
                                            <input type="text" className="form-control px-4" name="nama_todo" id="nama_todo" placeholder="Ketikkan disini ..." onChange={this.handleChangeInsert} />
                                        </div>
                                        <div className="col-md-auto col-sm align-self-center">
                                            <button className="btn btn-danger d-inline-block" >Cari</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="todolist my-md-3">
                            <div className="card">
                                <div className="card-body m-2">
                                    <div className="row d-flex">
                                        <div className="col">
                                        <form action="submit" className="m-2 row">
                                        <div className="col">
                                        <select id="typeTaskSelect" class="form-select text-secondary" name="jenis" onChange={this.handleChangeInsert}>
                                <option value="1">Quiz</option>
                                <option value="2">Assignment</option>
                            </select>
                            <div className="m-3 row">
                                            <input type="date" className="form-control px-4" name="tgl_ddline" id="tgl_ddline" onChange={this.handleChangeInsert}/>

                                            </div>
                                            <input type="text" className="form-control px-4" name="detail_task" id="detail_task" onChange={this.handleChangeInsert}/>
                                            <div className="m-3 row">
                                            <button className="btn btn-danger d-inline-block" onClick={this.insertTasktData}>Tambah</button></div>
                                        </div>
                                        </form>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                        this.state.task.map(task => {
                            return <Task key={task.id} uid={task.uid} todo={task.jenis} id={task.id} delete={this.deleteTask}/>
                        })
                        }
                        </div>

                    <div className="todolist my-md-3">
                            <div className="card">
                                <div className="card-body m-2">
                                    <div className="row d-flex">
                                        <div className="col">
                                            <a href="#"><img src="#" class="float-end" alt="ic_close"/></a>
                                            <div class="form-check mb-1">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label class="form-check-label" for="flexCheckDefault">Quiz</label>
                                            </div>
                                            <div class="row m-0">
                                                <div class="col">
                                                    <p class="mt-1 mb-2">Tes tes</p>
                                                </div>
                                                <div class="col-auto align-self-center">
                                                    <small>25/03/2022</small>
                                                </div>
                                            </div>
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

export default Taskk;