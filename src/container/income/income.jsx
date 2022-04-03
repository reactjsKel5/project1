import React, { Component } from "react";
import IncomeList from "../../component/incomeList";
import Sidebar from "../../component/menubar/sidebar";
import Topbar from "../../component/menubar/topbar";
import './income.css';

class Income extends Component {
    state = {
        listIncome: [],
        addIncome: {
            id: 1,
            uid: 1,
            pemasukan: 1,
            kategori_pemasukan: 1,
            tgl_pemasukan: "2022-03-25",
            catatan: "",
            saldo: 0
        },
        kategori: []
    }


    getIncome = () => {
        fetch('http://localhost:3001/pemasukan')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    listIncome: json
                })
            })
    }

    getCat = () => {
        fetch('http://localhost:3001/kategori_pemasukan')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    kategori: json
                })
            })
    }

    componentDidMount() {
        this.getIncome()
        this.getCat()
    }

    handleDelete = (id) => {
        fetch(`http://localhost:3001/pemasukan/${id}`, { method: 'DELETE' })
            .then(res => {
                this.getOutcome()
            })
    }

    handleAdd = (event) => {
        let insertIncome = { ...this.state.addIncome };
        let timestamp = new Date().getTime();
        insertIncome['id'] = timestamp;
        insertIncome[event.target.name] = event.target.value;
        this.setState({
            addIncome: insertIncome
        });
    }

    // insert to API
    insertIncome = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/pemasukan', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.addIncome)
        })
            .then(response => response.json())
            .then(json => this.getIncome)
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
                            <div className="col-md-7 col-sm">
                                <h2>Pemasukan Anda.</h2>
                            </div>
                            <div className="col-md-5 col-sm">
                                <select className="form-control month-select">
                                    <option value="">Januari</option>
                                    <option value="">Februari</option>
                                    <option value="">Maret</option>
                                    <option value="">April</option>
                                    <option value="">Mei</option>
                                    <option value="">Juni</option>
                                    <option value="">Juli</option>
                                    <option value="">Agustus</option>
                                    <option value="">September</option>
                                    <option value="">Oktober</option>
                                    <option value="">November</option>
                                    <option value="">Desember</option>
                                </select>
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
                                            <select className="form-control category-select mb-3" name="nama_kategori_pemasukan" id="nama_kategori_pemasukan" onChange={this.handleAdd} >
                                                {
                                                    this.state.kategori.map(cat => {
                                                        return <option value={cat.nama_kategori_pemasukan}>{cat.nama_kategori_pemasukan}</option>
                                                    })
                                                }
                                            </select>
                                            <input type="number" className="form-control px-4 mb-3" name="pemasukan" id="pemasukan" placeholder="Jumlah (Rp.)" onChange={this.handleAdd} />
                                            <input type="text" className="form-control px-4 mb-5" name="catatan" id="catatan" placeholder="Catatan" onChange={this.handleAdd} />
                                            <button className="btn btn-danger d-inline-block" onClick={this.insertIncome}>Tambah</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="income-list mt-3">
                                    <div className="card mb-3">
                                        <div className="card-body m-3">
                                            <small>28/02/2022</small>
                                            {
                                                this.state.listIncome.map(data => {
                                                    return <IncomeList key={data.id} uid={data.uid} pemasukan={data.pemasukan} catatan={data.catatan} id={data.id} delete={this.handleDelete} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm">
                                <div className="card income-saldo">
                                    <div className="card-body m-3">
                                        <h5>Total Pemasukan</h5>
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
                                        <h5>Presentase pemasukan</h5>
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
                                        <h3>Daftar Pemasukan</h3>
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

export default Income;