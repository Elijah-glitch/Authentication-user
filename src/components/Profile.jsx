import React, { useState } from "react";
import { Alert, Button, Stack } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logOut();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <Stack>
      <h2 className="text-center mb-4">Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <Button className="mt-2" variant="danger" onClick={handleLogout}>
        Log Out
      </Button>
    </Stack>
  );
}

export default Profile;
