import { Component } from 'react';
import "./login.css";

class LoginBtn extends Component {
    render() {
        return (
            <div>
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        );
    }
}

export default LoginBtn;