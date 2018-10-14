import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {LoginPage} from './pages/LoginPage';
import {AdminPage} from './pages/AdminPage';
import {UserPage} from './pages/UserPage';
import {authorization} from './mock/fakeAuth';
// import {createBrowserHistory} from 'history';
import {TestPage} from './pages/TestPage';
import {LogOut} from './pages/LogOutPage';
import Redirect from 'react-router-dom/Redirect';

class App extends Component {
  state = {
    user : null,
    errorMsg : '',
    userName : '',
    password: '',
    logOut: false,
  }

  // history = createBrowserHistory();

  auth(userName, password) {
    authorization(userName, password)
      .then((user) => {
        this.setState({
          user: user
        });
        // this.history.push({pathname: `/${user.userRole}`, state: {user}});
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
    this.setState({
      user: null,
      logOut: true,
    })
  }

  render() {
    console.log('user on render: ', this.state.user);
    const state = this.state;
    return (
      <div>
        {state.user && <div className = "Header">
          <button onClick = {this.onLogoutBtnClickHandler}>Log out</button>
        </div>}
        {/* {state.logOut && <Redirect to = "/" />} */}
        <div className = "Main">
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
          {(state.user) && (state.user.userRole === 'admin') && <Route path = "/admin" 
            render = {(props) => <AdminPage {...props} user = {this.state.user} />}
          />}
          {(state.user) && (state.user.userRole === 'user') && <Route path = "/user"
            render = {props => <UserPage {...props} user = {this.state.user} />}  
          />}
        </Switch>
      </Router>

        </div>
      </div>
    );
  }
}


export default App;
