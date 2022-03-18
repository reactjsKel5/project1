import { Component } from "react";
import './login.css';
class Passw extends Component {
    render(){
        return (
            <div>
<<<<<<< HEAD
            <label htmlFor="Password" className="form-label" class = 'mt-5'>Password</label>
            <input className='form-control' type="text" id='password'/>
=======
            <label htmlFor="Password" className="form-label">Password</label>
            <input className='form-control' type="password" id='password' securityTextEntry={true}/>
>>>>>>> 7bcc17e43ac8e51194052c455d59c5362ebb1b40
            </div>
        )
    }
}

export default Passw;