import React from 'react';
import {Redirect} from 'react-router-dom';
// import PropType from 'prop-types';

export const LoginPage = (props) => {
    return(
        <div className = "loginPage">
            <div className = "form">
                {props.user && props.user.userRole === "admin" && <Redirect to="/admin" />}
                {props.user && props.user.userRole === "user" && <Redirect to="/user" />}
                {!props.user && 
                <form>      
                    <input value = {props.userName} onChange={props.onChange} type = "text" name="userName" placeholder="username" />
                    <input value = {props.password} onChange={props.onChange} type = "password" name="password" placeholder="password" />
                    <button className = "LoginButton" onClick = {props.btnLoginHandler}>Login</button>
                </form>}
            </div>
        </div>
    )
}
