import logo from './logo.svg';
import "./login/Login.css";
import Login from './Login';
import React, {Component} from 'react';

class App extends Component {
    render(){
      return(
        <div>
          <Login /> 
        </div>
      );
    }
  }
  export default App;