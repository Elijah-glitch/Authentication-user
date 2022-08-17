import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function LogIn() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      setError("");
      await logIn(data.email, data.password);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <h1 className="text-center mb-4">Log In</h1>
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
      <div className="text-center my-2">
        <Link className="text-decoration-none" to="/forgetpassword">
          Forget your password?
        </Link>
      </div>
      <Button
        className="mt-3"
        style={{ width: "100%" }}
        variant="primary"
        type="submit"
      >
        Log In
      </Button>
      <p className="text-center mt-3">
        Do you have account?{" "}
        <Link className="text-decoration-none" to="/signup">
          Sign Up
        </Link>
      </p>
    </Form>
  );
}

export default LogIn;
