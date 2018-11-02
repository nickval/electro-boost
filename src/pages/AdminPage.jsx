import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

// const propTypes = {
//     isAdmin : PropTypes.bool.isRequired
// }

export const AdminPage = (props) => {
    console.log('admin page props: ', props);
    // if (props.user.role !== 'admin') {
    //     return <Redirect to = "/" />
    // }
    return(
        <div>AdminPage
            {!props.user && <Redirect to="/logout" />}

        </div>
    )
}

// AdminPage.PropTypes = propTypes;
