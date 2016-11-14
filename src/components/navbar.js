import React, {Component} from 'react';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {Grid, Row, Nav, NavItem, Navbar} from 'react-bootstrap';

class NavBar extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Navbar className="react-navbar" inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Eager.to App</a>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <IndexLinkContainer to="/">
                  <NavItem className="nav-link" eventKey={1}>Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/about">
                  <NavItem className="nav-link" eventKey={2}>About</NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavItem className="nav-link" eventKey={3}>Contact</NavItem>
                </LinkContainer>
                <LinkContainer to="/faq">
                  <NavItem className="nav-link" eventKey={4}>FAQ</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Grid>
    );
  }
}

export default NavBar;
