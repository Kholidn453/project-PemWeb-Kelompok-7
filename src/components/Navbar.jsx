import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";

function NavigationBar() {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div style={{ paddingTop: "70px" }}>
      <Navbar fixed="top" expand="lg" bg="light" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand href="#">Creative Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav
              className="mx-auto text-center"
              activeKey={activeLink}
              onSelect={handleSelect}
            >
              <Nav.Item>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link-custom ${isActive ? "active-nav" : ""}`
                  }
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/category"
                  className={({ isActive }) =>
                    `nav-link-custom ${isActive ? "active-nav" : ""}`
                  }
                >
                  Category
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `nav-link-custom ${isActive ? "active-nav" : ""}`
                  }
                >
                  Product
                </NavLink>
              </Nav.Item>
            </Nav>
            <div className="d-flex gap-2">
              <Button
                variant="outline-warning"
                className="custom-hover-white"
                style={{ borderRadius: 0 }}
                onClick={handleSignup}
              >
                Sign Up
              </Button>
              <Button
                variant="warning"
                className="text-white"
                style={{ borderRadius: 0 }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
