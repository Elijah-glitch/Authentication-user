import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingUp() {
  return (
    <Form style={{ width: "100%" }}>
      <h1 className="text-center mb-4">Sign Up</h1>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button
        className="mt-3"
        style={{ width: "100%" }}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
      <p className="text-center mt-3">Already you have an account?</p>
    </Form>
  );
}

export default SingUp;
