import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function SignUp() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h3 className="text-center mb-4">Creative Store</h3>
              <h5 className="text-center mb-3 text-muted">
                Create a New Account
              </h5>

              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create a password"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repeat your password"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="warning"
                    type="submit"
                    className="text-white"
                  >
                    Sign Up
                  </Button>
                </div>
              </Form>

              <p className="text-center mt-3 text-muted">
                Already have an account? <a href="/login">Sign in here</a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
