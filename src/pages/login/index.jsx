import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h3 className="text-center mb-4">Creative Store</h3>
              <h5 className="text-center mb-3 text-muted">
                Login to your account
              </h5>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    variant="warning"
                    type="submit"
                    className="text-white"
                  >
                    Login
                  </Button>
                </div>
              </Form>

              <p className="text-center mt-3 text-muted">
                Don't have an account? <a href="/signup">Sign up here</a>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
