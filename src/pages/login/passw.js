import { Component } from "react";
import './login.css';
class Passw extends Component {
    render(){
        return (
            <div>
            <label htmlFor="Password" className="form-label mt-4">Password</label>
            <input className='form-control' type="text" id='password'/>
            </div>
        )
    }
}

export default Passw;