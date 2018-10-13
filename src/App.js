import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch , withRouter} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import {LoginPage} from './pages/LoginPage';
import {AdminPage} from './pages/AdminPage';
import {UserPage} from './pages/UserPage';
import {authorization} from './mock/fakeAuth';
import {createBrowserHistory} from 'history';
import {TestPage} from './pages/TestPage';




class App extends Component {
  state = {
    user : null,
    errorMsg : '',
    userName : '',
    password: ''
  }

  history = createBrowserHistory();

  auth(userName, password) {
    console.log(`1st auth call... User name: ${userName}, password: ${password}`);
    authorization(userName, password)
      .then((user) => {
        this.setState({
          user: user
        });
        this.history.push({pathname: `/${user.userRole}`, state: {user}});
        console.log("User: ", user);
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

  render() {
    console.log('user on render: ', this.state.user);
    return (
      <Router>
        <Switch>
          <Route exact path = "/" 
            render = {props => <LoginPage 
                                  auth = {this.auth} 
                                  user = {this.state.user} 
                                  onChange={this.onChangeHandler}
                                  userName={this.state.userName}
                                  password={this.state.password}
                                  btnLoginHandler={this.onLoginBtnClickHandler}/>}  
            // component = {LoginPage}
          />
          {(this.state.user) && <Route path = "/admin" 
            render = {props => <AdminPage user = {this.state.user} />
            }
          
          // component = {AdminPage} isAdmin = {true}
          />}
          {(this.state.user) && (this.state.user.userRole === 'user') && <Route path = "/user"
            render = {props => <UserPage user = {this.state.user} />}  
          />}
          {/* <Route path = "/test" component = {TestPage} /> */}
          {<Route path = "/test"
            render = {render => <TestPage user = {this.state.user} />}
          />}
        </Switch>
      </Router>
    );
  }
}


export default App;
export withRouter(App);
