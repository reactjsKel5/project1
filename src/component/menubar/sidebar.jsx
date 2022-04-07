// import React, { Component } from "react";
// import './menubar.css';

// class Sidebar extends Component {
//     render() {
//         return (
//             <div className="container1">
//                 <div className="navigation">
//                     <ul>
//                         <li>
//                             <a href="#">
//                                 <span className="icon">
//                                     <ion-icon name="school-outline"></ion-icon>
//                                 </span>
//                                 <span className="title">Brand Name</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span className="icon">
//                                     <ion-icon name="home-outline"></ion-icon>
//                                 </span>
//                                 <span className="title">Dashboard</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span className="icon">
//                                     <ion-icon name="today-outline"></ion-icon>
//                                 </span>
//                                 <span className="title">College Management</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span className="icon">
//                                     <ion-icon name="cash-outline"></ion-icon>
//                                 </span>
//                                 <span className="title">Money Management</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <span className="icon">
//                                     <ion-icon name="person-circle-outline"></ion-icon>
//                                 </span>
//                                 <span className="title">Edit Profile</span>
//                             </a>
//                         </li>
//                         <li className="mt-5">
//                             <a href="#">
//                                 <span className="icon">
//                                     <ion-icon name="log-out-outline"></ion-icon>
//                                 </span>
//                                 <span className="title">Log-out</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Sidebar;


import React, { Component } from "react";
import './menubar.css';
import Dashboard from "../../container/dashboard/dashboard";
import MenuCM from "../../container/menuCM/menuCM";
import MenuMM from "../../container/menuMM/menuMM";

import {
    Link

} from "react-router-dom";




class Sidebar extends Component {
    render() {
        return (
            <div className="container1">
                <div className="navigation">
                    <ul>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                                <span className="title">Brand Name</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="icon">
                                    <ion-icon name="home-outline"></ion-icon>
                                </span>
                                <span className="title">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/CollegeManagement">
                                <span className="icon">
                                    <ion-icon name="today-outline"></ion-icon>
                                </span>
                                <span className="title">College Management</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/MoneyManagement">
                                <span className="icon">
                                    <ion-icon name="cash-outline"></ion-icon>
                                </span>
                                <span className="title">Money Management</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/editProfile">
                                <span className="icon">
                                    <ion-icon name="person-circle-outline"></ion-icon>
                                </span>
                                <span className="title">Edit Profile</span>
                            </Link>
                        </li>
                        {/* <li className="mt-5">
                            <a href="#">
                                <span className="icon">
                                    <ion-icon name="log-out-outline"></ion-icon>
                                </span>
                                <span className="title">Log-out</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div >
        );
    }
}


export default Sidebar;
