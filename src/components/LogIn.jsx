import React from "react";

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <Form style={{ width: "100%" }}>
      <h1 className="text-center mb-4">Log In</h1>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button
        className="mt-3"
        style={{ width: "100%" }}
        variant="primary"
        type="submit"
      >
        Log In
      </Button>
      <p className="text-center mt-3">
        Do you have account? <Link to="/signup">Sign Up</Link>
      </p>
    </Form>
  );
}

export default LogIn;
