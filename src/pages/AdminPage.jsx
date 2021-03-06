import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

const propTypes = {
    isAdmin : PropTypes.bool.isRequired
}

export const AdminPage = (props) => {
    console.log(props);
    if (!props.isAdmin) {
        return <Redirect to = "/" />
    }
    return(
        <div>AdminPage</div>
    )
}

AdminPage.PropTypes = propTypes;
