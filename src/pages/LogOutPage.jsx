import React from 'react';
import {Redirect} from 'react-router-dom';

export const LogOutPage = (props) => {
    console.log("Logout");
    return(
        <div>
            <Redirect to = "/" />
        </div>
    )
}