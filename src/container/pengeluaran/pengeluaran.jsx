import React, { Component } from "react";
import Sidebar from "../../component/menubar/sidebar";
import Topbar from "../../component/menubar/topbar";
import './pengeluaran.css';
import OutList from "../../component/outcome";

class Pengeluaran extends Component {

    state = {
        kategori: [],
        pengeluaran: [],
        insertPengeluaran: {
            id: 1,
            uid: 1,            
            pengeluaran: "",
            kategori_pengeluaran: 6,
            tgl_pengeluaran: "2022-03-25",
            catatan: "",
            saldo: 30000,
        }
    }

    fetchCat = () => {
        fetch('http://localhost:3001/kategori_pengeluaran')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    kategori: json
                })
            })
    }

    fetchPengeluaran = () => {
        fetch('http://localhost:3001/pengeluaran')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    pengeluaran: json
                })
            })
    }

    componentDidMount() {
        this.fetchCat()
        this.fetchPengeluaran()
    }

    handleDelete = (id) => {
        fetch(`http://localhost:3001/pengeluaran/${id}`, {method: 'DELETE'})
            .then(res => {
                this.fetchPengeluaran()
            })
    }

    handleAddOutcome = (event) => {
        let insertOutcome = {...this.state.insertPengeluaran};
        let timestamp = new Date().getTime();
        insertOutcome['id'] = timestamp;
        insertOutcome[event.target.name] = event.target.value;
        this.setState({
            insertPengeluaran: insertOutcome
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/pengeluaran', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertPengeluaran)
        })
        .then(response => response.json())
        .then(json => this.fetchPengeluaran())
    }

    render() {
        return (
            <div>
                <Sidebar />
                <div className="main">
                    <Topbar />

                    {/* Tulis content di bawah sini */}
                    <div className="content mx-md-5 my-5">
                        <div className="row">
                            <div className="col">
                                <h2>Pengeluaran Anda.</h2>
                            </div>
                            <div className="col">
                                <div class="dropdown-month mb-3 text-end">
                                    <button className="btn btn-secondary dropdown-toggle px-3" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        Maret
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><button className="dropdown-item" type="button">Januari</button></li>
                                        <li><button className="dropdown-item" type="button">Februari</button></li>
                                        <li><button className="dropdown-item" type="button">Maret</button></li>
                                        <li><button className="dropdown-item" type="button">April</button></li>
                                        <li><button className="dropdown-item" type="button">Mei</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-7 col-sm">
                                <div className="add-income card">
                                    <div className="card-body my-4 mx-3">
                                        <div className="row mb-3">
                                            <div className="col">
                                                <h3>Tambahkan</h3>
                                            </div>
                                            <div className="col date-picker text-end">
                                                <a href="#">Hari ini</a>
                                            </div>
                                        </div>
                                        <form action="submit">
                                            <div class="dropdown-category mb-3">
                                                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Kategori
                                                </button>
                                                <ul className="dropdown-menu">
                                                    {
                                                        this.state.kategori.map(cat => {
                                                            return <li><button className="dropdown-item" type="button">{cat.nama_kategori_pengeluaran}</button></li>
                                                        })
                                                    }                                                    
                                                </ul>
                                            </div>
                                            <input type="number" className="form-control px-4 mb-3" name="pengeluaran" id="pengeluaran" placeholder="Jumlah (Rp.)" onChange={this.handleAddOutcome} />
                                            <input type="text" className="form-control px-4 mb-5" name="catatan" id="catatan" placeholder="Catatan" onChange={this.handleAddOutcome} />
                                            <button className="btn btn-danger d-inline-block" onClick={this.handleTombolSimpan}>Tambah</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="income-list mt-3">
                                    <div className="card mb-3">
                                        <div className="card-body m-3">
                                            <small>Pengeluaran/date</small>
                                            {
                                                this.state.pengeluaran.map( data => {
                                                    return <OutList id={data.id} catatan={data.catatan} pengeluaran={data.pengeluaran} delete={this.handleDelete}/>
                                                })
                                            }
                                            {/* <div className="income-item row mt-4">
                                                <div className="col-auto">
                                                    <img src={require('../../img/gaji.png')} alt="category-logo" />
                                                </div>
                                                <div className="col nama-pemasukan align-self-center">
                                                    <p className="m-0">Gaji bulan april</p>
                                                </div>
                                                <div className="col jumlah align-self-center">
                                                    <p className="m-0">2 300 000</p>
                                                </div>
                                                <div className="col-auto delete align-self-center">
                                                    <button><ion-icon name="trash-outline"></ion-icon></button>
                                                </div>
                                            </div>                                            */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm">
                                <div className="card income-saldo">
                                    <div className="card-body m-3">
                                        <h5>Total Pengeluaran</h5>
                                        <div className="row">
                                            <div className="col-auto">
                                                <h1 className="m-0">135 000</h1>
                                            </div>
                                            <div className="col align-self-center">
                                                <h5>Rupiah</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card chart mt-3">
                                    <div className="card-body m-3">
                                        <h3>Chart</h3>
                                        <h5>Presentase pengeluaran</h5>
                                        <div className="row mx-auto mt-4">
                                            <div className="col">
                                                <img src={require('./advanced.png')} alt="chart" />
                                            </div>
                                            <div className="col align-self-center">
                                                <ul>
                                                    <li>Gaji</li>
                                                    <li>Orang Tua</li>
                                                    <li>Hadiah</li>
                                                    <li>Investasi</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card income-presentase mt-3">
                                    <div className="card-body m-3">
                                        <h3>Daftar Pengeluaran</h3>
                                        <div className="income-item row mt-4">
                                            <div className="col-auto">
                                                <img src={require('../../img/gaji.png')} alt="category-logo" />
                                            </div>
                                            <div className="col name-presentase align-self-center">
                                                <p className="m-0">Gaji</p>
                                            </div>
                                            <div className="col-auto presentase align-self-center">
                                                <p className="m-0">45%</p>
                                            </div>
                                        </div>
                                        <div className="income-item row mt-4">
                                            <div className="col-auto">
                                                <img src={require('../../img/orang-tua.png')} alt="category-logo" />
                                            </div>
                                            <div className="col name-presentase align-self-center">
                                                <p className="m-0">Orang Tua</p>
                                            </div>
                                            <div className="col-auto presentase align-self-center">
                                                <p className="m-0">21%</p>
                                            </div>
                                        </div>
                                        <div className="income-item row mt-4">
                                            <div className="col-auto">
                                                <img src={require('../../img/hadiah.png')} alt="category-logo" />
                                            </div>
                                            <div className="col name-presentase align-self-center">
                                                <p className="m-0">Hadiah</p>
                                            </div>
                                            <div className="col-auto presentase align-self-center">
                                                <p className="m-0">12%</p>
                                            </div>
                                        </div>
                                        <div className="income-item row mt-4">
                                            <div className="col-auto">
                                                <img src={require('../../img/investasi.png')} alt="category-logo" />
                                            </div>
                                            <div className="col name-presentase align-self-center">
                                                <p className="m-0">Investasi</p>
                                            </div>
                                            <div className="col-auto presentase align-self-center">
                                                <p className="m-0">9%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Pengeluaran;