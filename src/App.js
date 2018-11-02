import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {LoginPage} from './pages/LoginPage';
import {RegisterPage} from './pages/RegisterPage';
import {AdminPage} from './pages/AdminPage';
import {UserPage} from './pages/UserPage';
import {authorization} from './mock/fakeAuth';
// import {createBrowserHistory} from 'history';
import {TestPage} from './pages/TestPage';
import {LogOutPage} from './pages/LogOutPage';
import Redirect from 'react-router-dom/Redirect';

class App extends Component {
  state = {
    user : null,
    errorMsg : '',
    userName : '',
    password: '',
    confirmPassword: '',
    logOut: false,
  }


  auth(userName, password) {
    authorization(userName, password)
      .then((user) => {
        this.setState({
          user: user
        });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({
        //   errorMsg: error.value
        // })
      });

  }

  onChangeHandler = (event) => {
    // console.log(event.target.name);
    switch (event.target.name) {
      case 'userName':
        this.setState({
          userName: event.target.value
        });
        // console.log('userNAme setState...')
        break;
      case 'password':
          this.setState({
            password: event.target.value
          });
          // console.log('password setState...')
        break;
      case 'confirmPassword':
          this.setState({
            confirmPassword: event.target.value
          });
          break;
      default:
        break;
    }
    this.setState({
      // userName: event.target.
    })
  }

  onLoginBtnClickHandler = () => {
    console.log("Login Clicked: ", this.state.userName, this.state.password)
    this.auth(this.state.userName, this.state.password);
  }

  onLogoutBtnClickHandler = () => {
    console.log("Logout 1st:", this.state.user);
    this.setState({
      user: null,
      logOut: true,
      userName : '',
      password: '',
      confirmPassword: '',
    });
  }

  render() {
    console.log('user on render: ', this.state.user);
    const state = this.state;
    return (
      <div>
        {state.user && <div className = "topHeader">
          <button onClick = {this.onLogoutBtnClickHandler}>Log out</button>
        </div>}
        <div className = "main">
        <Router>
          <Switch>
            <Route exact path = "/" 
              render = {props => <LoginPage 
                                    auth = {this.auth} 
                                    user = {this.state.user} 
                                    onChange={this.onChangeHandler}
                                    userName={this.state.userName}
                                    password={this.state.password}
                                    btnLoginHandler={this.onLoginBtnClickHandler}
                                    logOut={this.state.logOut}/>}  
            />
            <Route exact path = "/register" 
              render = {props => <RegisterPage 
                                    auth = {this.auth} 
                                    user = {this.state.user} 
                                    onChange={this.onChangeHandler}
                                    userName={this.state.userName}
                                    password={this.state.password}
                                    btnLoginHandler={this.onLoginBtnClickHandler}
                                    logOut={this.state.logOut}/>}  
            />
            {(state.user) && (state.user.userRole === 'admin') && <Route path = "/admin" 
              render = {(props) => <AdminPage {...props} user = {this.state.user} />}
            />}
            {(state.user) && (state.user.userRole === 'user') && <Route path = "/user"
              render = {props => <UserPage {...props} user = {this.state.user} />}  
            />}
            {(state.user == null) && <Route path = "/"
              render = {(props) => <LogOutPage {...props} />}
            />}
          </Switch>
      </Router>

        </div>
      </div>
    );
  }
}


export default App;
