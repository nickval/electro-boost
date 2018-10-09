import React from 'react';
import PropType from 'prop-types';

export const LoginPage = (props) => {

    return(
        <div>Login page:
            <div className = "userInput">
                User Name: <input value = {props.userName} onChange={props.onChange} type = "text" name="userName" />
            </div>
            <div>
                Password: <input value = {props.password} onChange={props.onChange} type = "password" name="password" />
            </div>
            <div>
                <button className = "LoginButton" onClick = {props.btnLoginHandler}>Login</button>
            </div>
        </div>
    )
}
