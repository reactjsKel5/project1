import { Component } from 'react';
import './login.css';

class Uname extends Component {
    render() {
        return (
            <div>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
            </div>
        );
    }
}

export default Uname;