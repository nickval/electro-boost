import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import {LoginPage} from './pages/LoginPage';
import {AdminPage} from './pages/AdminPage';
import {UserPage} from './pages/UserPage';
import {authorization} from './mock/fakeAuth';




class App extends Component {
  state = {
    user : null,
    errorMsg : ''
  }

  auth(userName, password) {
    console.log(`1st auth call... User name: ${userName}, password: ${password}`);
    authorization(userName, password)
      .then((user) => {
        this.setState({
          user: user
        })
      })
      .catch((error) => {
        console.log(error);
        // this.setState({
        //   errorMsg: error.value
        // })
      });

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" 
            render = {props => <LoginPage auth = {this.auth} user = {this.state.user}/>}  
            // component = {LoginPage}
          />
          {(this.state.user) && (this.state.user.role === 'admin') && <Route path = "/admin" 
            render = {props => <AdminPage user = {this.state.user} />
            }
          
          // component = {AdminPage} isAdmin = {true}
          />}
          {(this.state.user) && (this.state.user.role === 'user') && <Route path = "/user"
            render = {props => <UserPage user = {this.state.user} />}  
          />}
        </Switch>
      </Router>
    );
  }
}


export default App;
