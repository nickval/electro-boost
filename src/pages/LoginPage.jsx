import React from 'react';
import {Redirect} from 'react-router-dom';
// import PropType from 'prop-types';

export const LoginPage = (props) => {
    return(
        <div className = "LoginPage">
            {props.user && props.user.userRole === "admin" && <Redirect to="/admin" />}
            {props.user && props.user.userRole === "user" && <Redirect to="/user" />}
            {!props.user && <div>      
                Login page:
                <div className = "userInput">
                    User Name: <input value = {props.userName} onChange={props.onChange} type = "text" name="userName" />
                </div>
                <div className = "userInput">
                    Password: <input value = {props.password} onChange={props.onChange} type = "password" name="password" />
                </div>
                <div>
                    <button className = "LoginButton" onClick = {props.btnLoginHandler}>Login</button>
                </div>
            </div>}
        </div>
        
    )
}
