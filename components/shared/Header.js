import React from "react";
import Link from "next/link";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row
} from "reactstrap";

import ActiveLink from "../ActiveLink";

import auth0 from "../../services/auth0";

const BootstrapNavLink = props => {
  const { route, title } = props;
  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </ActiveLink>
  );
};

const Register = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable">
      Register
    </span>
  );
};

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable">
      Login
    </span>
  );
};

const Logout = () => {
  return (
    <span
      onClick={auth0.logout}
      className="nav-link port-navbar-link clickable"
    >
      Logout
    </span>
  );
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  renderOwnerMenu() {
    const { isSiteOwner } = this.props;

    if (isSiteOwner) {
      return (
        <Dropdown
          className="port-navbar-link"
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropdown}
        >
          <DropdownToggle className="port-dropdown-toggle" nav caret>
            My Studies!!
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <BootstrapNavLink route="/blogs" title="Material" />
            </DropdownItem>
            <DropdownItem>
              <BootstrapNavLink route="/blogs/new" title="Create" />
            </DropdownItem>
            <DropdownItem>
              {" "}
              <BootstrapNavLink
                route="/blogs/dashboard"
                title="Blogs Dashboard"
              />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }

    return (
      <NavItem className="port-navbar-item">
        <BootstrapNavLink route="/studyLoggedOut" title="Study!" />
      </NavItem>
    );
  }

  renderStudentMenu() {
    const { isSiteOwner, isAuthenticated } = this.props;

    if (isSiteOwner) {
      return (
        <Dropdown
          className="port-navbar-link"
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropdown}
        >
          <DropdownToggle className="port-dropdown-toggle" nav caret>
            My Studies!!
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <BootstrapNavLink route="/blogs" title="Material" />
            </DropdownItem>
            <DropdownItem>
              <BootstrapNavLink route="/blogs/new" title="Create" />
            </DropdownItem>
            <DropdownItem>
              {" "}
              <BootstrapNavLink
                route="/blogs/dashboard"
                title="Blogs Dashboard"
              />
            </DropdownItem>
            <DropdownToggle className="port-dropdown-toggle" nav caret>
              My Studies!!
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <BootstrapNavLink route="/blogs" title="Material" />
              </DropdownItem>
              <DropdownItem>
                <BootstrapNavLink route="/blogs/new" title="My Profile" />
              </DropdownItem>
            </DropdownMenu>
          </DropdownMenu>
        </Dropdown>
      );
    }
    if (isAuthenticated) {
      return (
        <Dropdown
          className="port-navbar-link"
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropdown}
        >
          <DropdownToggle className="port-dropdown-toggle" nav caret>
            My Studies!!
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <BootstrapNavLink route="/blogs" title="Material" />
            </DropdownItem>
            <DropdownItem>
              <BootstrapNavLink route="/blogs/new" title="My Profile" />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
    return (
      <NavItem className="port-navbar-item">
        <BootstrapNavLink route="/studyLoggedOut" title="Study!" />
      </NavItem>
    );
  }

  render() {
    const { isAuthenticated, user, className } = this.props;
    const { isOpen } = this.state;

    const menuOpenClass = isOpen ? "menu-open" : "menu-closed";

    return (
      <div>
        <Navbar
          className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
          color="transparent"
          dark
          expand="md"
        >
          <NavbarBrand className="port-navbar-brand port-navbar-link" href="/">
            Portuglês.com
          </NavbarBrand>
          <div id="notifications" />
          <NavbarToggler
            onClick={this.toggle}
            name="open-menu"
            id="navbar-toggle"
            title="navbar-toggle"
            aria-label="navbar-toggle"
            value="open-menu"
            className=".navbar-light .navbar-toggler-icon"
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BootstrapNavLink route="/" title="home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BootstrapNavLink route="/about" title="About" />
              </NavItem>
              {/*<NavItem className="port-navbar-item">
                <BootstrapNavLink route="/cv" title="CV" />
              </NavItem>*/}
              {/*  {!isAuthenticated && (
                  <NavItem className="port-navbar-item">
                    <BootstrapNavLink route="/studyLoggedOut" title="Testing!" />
                  </NavItem>
                )}*/}

              {/*  <NavItem className="port-navbar-item">
                  <BootstrapNavLink route="/signin" title="signin" />
                </NavItem>*/ !isAuthenticated && (
                <>
                  <NavItem className="port-navbar-item">
                    <BootstrapNavLink route="/signup" title="signup" />
                  </NavItem>
                </>
              )}

              {isAuthenticated && (
                <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
              )}
              {/*  {isAuthenticated && (
                  <NavItem className="port-navbar-item">
                    <BootstrapNavLink route="/portfolios" title="Testing!!" />
                  </NavItem>
                )}*/}

              {isAuthenticated && (
                <Dropdown
                  className="port-navbar-link"
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <DropdownToggle
                    className="port-dropdown-toggle port-navbar-link"
                    nav
                    caret
                  >
                    {user.name}
                  </DropdownToggle>
                  <DropdownMenu>
                    {/*  <DropdownItem>
                        <BootstrapNavLink route="/blogs" title="Material" />
                      </DropdownItem> */}
                    {/*  <DropdownItem>
                        <BootstrapNavLink route="/blogs/new" title="Create" />
                      </DropdownItem> */}
                    {/*<DropdownItem>
                        <div id="notifications" />
                      </DropdownItem>*/}

                    <DropdownItem>
                      {" "}
                      <BootstrapNavLink route="/profile" title="Profile" />
                    </DropdownItem>
                    {/*<DropdownItem>
                      <BootstrapNavLink route="/blogs" title="Material" />
                    </DropdownItem>*/}
                  </DropdownMenu>
                </Dropdown>
              )}
            </Nav>
          </Collapse>
        </Navbar>
        <Row>
          <Col
            sm="12"
            md={{ size: 6, offset: 6 }}
            style={{ textAlign: "center" }}
          >
            <div className="header-logo">
              <CloudinaryContext cloudName="setstate" fetchFormat="auto">
                <div className="image-holder">
                  <Image
                    publicId="qtlh720szyxmigrpmvpb.png"
                    className="cld-img"
                    alt="site-logo"
                    responsive
                    secure
                  />
                </div>
              </CloudinaryContext>
              {/*<img src="/static/images/logo.png" alt="" />*/}
              <div className="strapline">
                <p className="strapline-text">
                  The people from here - the language from there <br />
                  Native English courses for Brazilian students
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
