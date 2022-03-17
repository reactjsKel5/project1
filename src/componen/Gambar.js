import React,{ Component } from "react";
import './Gambar.css';
import Logowelcome from './Icon.png'


class Gambar extends Component{
    render(){
        return (
            <div>
            <h2 className="title">Choise Youre 
            <br/>The Best Skincare</h2>
            
            <img className="image" src={Logowelcome} alt="logo"/>
            </div>
        );
    }
}
export default Gambar;