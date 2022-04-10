import logo from './logo.svg';
import './App.css';
import Dashboard from "../src/container/dashboard/dashboard";
import MenuCM from "../src/container/menuCM/menuCM";
import MenuMM from "../src/container/menuMM/menuMM";
import Notes from "./container/notes/notes";
import Schedule from "./container/schedule/schedule";
import Taskk from "./container/task/task";
import Todolist from './container/todolist/todolist';
import Income from './container/income/income';
import Outcome from './container/outcome/outcome';
import Login from './component/login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthProvider } from './component/auth/auth';
import { RequireAuth } from './component/auth/requireAuth';
import Profil from './container/profil/profil';
import ProfilEdit from './container/profil_edit/profil_edit';
import Register from './container/register/register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/"><RequireAuth><Dashboard /></RequireAuth></Route>
          <Route exact path="/CollegeManagement"><RequireAuth><MenuCM /></RequireAuth></Route>
          <Route exact path="/MoneyManagement"><RequireAuth><MenuMM /></RequireAuth></Route>
          <Route exact path="/CollegeManagement/Notes"><RequireAuth><Notes /></RequireAuth></Route>
          <Route exact path="/CollegeManagement/Schedule"><RequireAuth><Schedule /></RequireAuth></Route>
          <Route exact path="/CollegeManagement/Task"><RequireAuth><Taskk /></RequireAuth></Route>
          <Route exact path="/CollegeManagement/Todolist"><RequireAuth><Todolist /></RequireAuth></Route>
          <Route exact path="/Pengeluaran"><RequireAuth><Outcome /></RequireAuth></Route>
          <Route exact path="/Pemasukan"><RequireAuth><Income /></RequireAuth></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/register"><Register /></Route>
          <Route exact path="/Profile"><Profil /></Route>
          <Route exact path="/editProfile"><ProfilEdit /></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
