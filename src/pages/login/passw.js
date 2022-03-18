import { Component } from "react";
import './passw.css';

class Passw extends Component {
    render(){
        return (
            <div className='font-poppins'>
                <input className='pass' type="text " placeholder="Password"/>
            </div>
        )
    }
}

export default Passw;