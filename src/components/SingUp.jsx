import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function SingUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return setError("password not match");
    }

    setLoading(true);
    try {
      setError("");
      await signup(data.email, data.password);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <h1 className="text-center mb-4">Sign Up</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && <Loading />}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          {...register("email")}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...register("password")}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          {...register("confirmPassword")}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button
        className="mt-3"
        style={{ width: "100%" }}
        variant="primary"
        type="submit"
      >
        Sing Up
      </Button>
      <p className="text-center mt-3">
        Already you have an account?{" "}
        <Link className="text-decoration-none" to="/login">
          Log In
        </Link>
      </p>
    </Form>
  );
}

export default SingUp;
