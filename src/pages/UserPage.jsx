import React from 'react';
import {Redirect} from 'react-router-dom';
// import PropType from 'prop-types';

export const UserPage = (props) => {
    return(
        <div>UserPage
            {!props.user && <Redirect to="/logout" />}

        </div>
    )
}
