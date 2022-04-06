import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './container/dashboard/dashboard';
import MenuCM from './container/menuCM/menuCM';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(<MenuCM/>, document.getElementById('root'));
// ReactDOM.render(<Todolist/>, document.getElementById('root'));
// ReactDOM.render(<Pemasukan/>, document.getElementById('root'));
ReactDOM.render(<Dashboard/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
