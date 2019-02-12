import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from './component/Login';
import {TodoApp} from './TodoApp';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const LoginView = () => (
      <Login/>
  );

  const TodoView = () => (
        <TodoApp/>
    );



class App extends Component {


    constructor(props) {
        super(props);
        localStorage.setItem('User',"Baphomet");
        localStorage.setItem('Password',"666");



    }



    render() {


        return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>

             <br/>
             <br/>

             <ul>
             {localStorage.getItem('IsLoggedIn')==="true"
                 ? <li><Link to="/todo">Todo</Link> <Route path="/todo" component={TodoView}/></li>
                 : <li><Link to="/">Login</Link> <Route exact path="/" component={LoginView}/></li>
             }



             </ul>




            </div>
        </Router>

             );



    }
}

export default App;
