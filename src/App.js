import logo from './logo.svg';
import './App.css';
import Dashboard from "../src/container/dashboard/dashboard";
import MenuCM from "../src/container/menuCM/menuCM";
import MenuMM from "../src/container/menuMM/menuMM";
import Notes from "./container/notes/notes";
import Schedule from "./container/schedule/schedule";
import Taskk from "./container/task/task";
import Todolist from './container/todolist/todolist';
import Pengeluaran from './container/pengeluaran/pengeluaran';
import Income from './container/income/income';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Dashboard /></Route>
        <Route exact path="/CollegeManagement"><MenuCM /></Route>
        <Route exact path="/MoneyManagement"><MenuMM /></Route>
        <Route exact path="/Notes"><Notes /></Route>
        <Route exact path="/Schedule"><Schedule /></Route>
        <Route exact path="/Task"><Taskk /></Route>
        <Route exact path="/Todolist"><Todolist /></Route>
        <Route exact path="/Pengeluaran"><Pengeluaran /></Route>
        <Route exact path="/Pemasukan"><Income /></Route>
      </Switch>
    </Router>
  );
}

export default App;
