import logo from './logo.svg';
import './App.css';
import Dashboard from "../src/container/dashboard/dashboard";
import MenuCM from "../src/container/menuCM/menuCM";
import MenuMM from "../src/container/menuMM/menuMM";


import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Dashboard /></Route>
        <Route exact path="/CollegeManagement"><MenuCM /></Route>
        <Route exact path="/MoneyManagement"><MenuMM /></Route>
      </Switch>
    </Router>
  );
}

export default App;
