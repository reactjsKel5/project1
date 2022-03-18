import { Component } from "react";
import './login.css';
class Passw extends Component {
    render(){
        return (
            <div>
            <label htmlFor="Password" className="form-label">Password</label>
            <input className='form-control' type="password" id='password' securityTextEntry={true}/>
            </div>
        )
    }
}

export default Passw;