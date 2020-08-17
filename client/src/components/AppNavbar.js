import React, { Component , Fragment} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RegisterModal from "./auth/RegisterModal";
import Logout from './auth/Logout'
import LoginModal from './auth/LoginModal'
import { Link } from 'react-router-dom'

class AppNavbar extends Component {
  /*    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }
    */
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong> { user ? `Welcome ${user.name}` : ''}</strong>
          </span>
        </NavItem>

        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <strong> { user ? `Welcome ${user.name}` : ''}</strong>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to="/item" activeClassName="active">Add Item</Link>
                </DropdownItem>
                <DropdownItem>
                  Add Category
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Logout/>
                </DropdownItem>
              </DropdownMenu>
        </UncontrolledDropdown>

      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal/>
        </NavItem>
        <NavItem>
          <LoginModal/>
        </NavItem>
      </Fragment>
    );


    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/"> Everest Restaurant </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                { isAuthenticated ? authLinks : guestLinks }
               
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect (mapStateToProps, null)(AppNavbar);
