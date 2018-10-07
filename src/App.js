import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {LoginPage} from './pages/LoginPage';
import {AdminPage} from './pages/AdminPage';
import {UserPage} from './pages/UserPage';
import {authentification} from './mock/fakeAuth';




class App extends Component {
  state = {
    user : null,
    errorMsg : ''
  }

  auth(userName, password) {
    authentification(userName, password)
      .then((user) => {
        this.setState({
          user: user
        })
      })
      .catch((errorMsg) => {
        this.setState({
          errorMsg: errorMsg.msg
        })
      });

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {LoginPage}/>
          <Route path = "/admin" 
            render = {props => <AdminPage user = {user} />
            }
          // component = {AdminPage} isAdmin = {true}
          />
          <Route path = "/user" component = {UserPage}/>
        </Switch>
      </Router>
    );
  }
}


export default App;
