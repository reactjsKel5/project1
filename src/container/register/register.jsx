import { Component } from "react";
import pictRegist from "./img/pict-regist.png";
import "./register.css"

class Register extends Component {
    state ={
        profile: [],
        insertprofile: {
            id:'',
            nama_lengkap:'',
            no_hp:'',
            email:'',
            password:''
        }
    }
    //menampilkan data mahasiswa
    ambilDataDariAPI = () => {
        fetch('http://localhost:3001/profile')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    profile: json
                })
            })
    }

    //insertdata user
    handleInsertData = (event) =>{
        let forminsertprofile = {...this.state.insertprofile};
        let timestamp = new Date().getTime();
        forminsertprofile['id']= timestamp;
        forminsertprofile[event.target.name] = event.target.value;
        this.setState({
            insertprofile: forminsertprofile
        });
    }

    //tombol insert data
    handleTombolDaftar = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.insertprofile)
        })
        .then(respose => Response.json())
        .then(json => this.ambilDataDariAPI)
    }

    render() {
        return (


            <div>
                <main>
                    <div className="row">
                        <div className="col col-left p-5 text-center ">
                            <img src={pictRegist} className="m-auto" alt="gambar-regist" />
                            <h5>Mulai Atur Gaya Hidupmu</h5>
                            <h3>Sekarang</h3>
                        </div>

                        <div className="col col-left text-center">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Buat Akun Baru</h3>
                                    <p>Lengkapi Data Diri Anda</p>
                                    
                                    <form >
                                        <input type="text" placeholder="Masukkan Nama Lengkap" className="form-control mb-3 mt-5" id="nama_lengkap" name="nama_lengkap"  onChange={this.handleInsertData}/>
                                        <input type="text" placeholder="Masukkan Nomor Telephone" className="form-control mb-3 " id="no_hp" name="no_hp" onChange={this.handleInsertData}/>
                                        <input type="text" placeholder="Masukkan Email Anda" className="form-control mb-3 " id="email" name="email" aria-describedby="emailHelp" onChange={this.handleInsertData} />
                                        <input type="password" placeholder="Masukkan Password" className="form-control mb-3" id="password" name="password" onChange={this.handleInsertData} />

                                        <button type="submit" className="btn btn-primary mt-5" onClick={this.handleTombolDaftar}>DAFTAR</button>


                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </main>
            </div>

        )
    }

}
export default Register;