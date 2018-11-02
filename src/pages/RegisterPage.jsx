import React from 'react';
import {Redirect} from 'react-router-dom';
// import PropType from 'prop-types';

export const RegisterPage = (props) => {
    return(
        <div className = "loginPage">
            <div className = "form">
                {props.user && props.user.userRole === "admin" && <Redirect to="/admin" />}
                {props.user && props.user.userRole === "user" && <Redirect to="/user" />}
                {!props.user && 
                <form>      
                    <input value = {props.userName} onChange={props.onChange} type = "text" name="userName" placeholder="username" />
                    <input value = {props.password} onChange={props.onChange} type = "password" name="password" placeholder="password" />
                    <input value = {props.confirmPassword} onChange={props.onChange} type = "password" name="confirmPassword" placeholder="confirm password" />
                    <button className = "signinButton" onClick = {props.btnLoginHandler}>Create account</button>
                    
                    <p className="notRegistered">Already registered? <a href="/login">Sign in</a></p>
                    
                </form>}
            </div>
        </div>
    )
}
