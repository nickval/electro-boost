import React from 'react';
import PropType from 'prop-types';

export const LoginPage = (props) => {
    const userName = '';
    const password = '';
    // props.user = {
    //     name : '',

    // }
    function onInputChange(event) {
        console.log(event.target.value);
        [event.target.name] = event.target.value;
    }
    return(
        <div>Login page:
            <div className = "userInput">
                User Name: <input defaultValue = {userName} onChange = {onInputChange} type = "text" name="name" />
            </div>

            {/* {props.user = {
                name : 'Nick',
                password : '123456',
                role : 'admin'
            }} */}
            <div>
                Password: <input defaultValue = {password} onChange = {onInputChange} type = "text" name="pasword" />
            </div>
            <div>
                <button className = "LoginButton" onClick = {() => props.auth(userName, password)}>Login</button>
            </div>
        </div>
    )
}
