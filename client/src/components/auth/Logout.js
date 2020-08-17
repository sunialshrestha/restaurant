import React, { Component, Fragment } from 'react';
import { NavLink, NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions'
import PropTypes from 'prop-types'

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
     render() {
         return (
             <Fragment>
                 {console.log(this.props)}
                 <NavItem onClick={ this.props.logout } href = "#">
                     Logout
                 </NavItem>
             </Fragment>
         )
     }
}

export default connect (
    null,
    { logout }
)(Logout)