import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

function ForgetPassword() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      setError("");
      await resetPassword(data.email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <h1 className="text-center mb-4">Reset Password</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      {loading && <Loading />}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          {...register("email")}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Button
        className="mt-3"
        style={{ width: "100%" }}
        variant="primary"
        type="submit"
      >
        Reset Password
      </Button>
      <div className="text-center my-4">
        <Link className="text-decoration-none" to="/login">
          Back to login
        </Link>
      </div>
    </Form>
  );
}

export default ForgetPassword;
