import { Component } from 'react';
import './uname.css';

class Uname extends Component {
    render() {
        return (
            <div className='font-poppins'>
                <h3>Hi, Welcome Back!</h3>
                <input type="text" placeholder="Username"/>
            </div>
        );
    }
}

export default Uname;