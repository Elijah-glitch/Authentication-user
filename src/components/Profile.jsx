import React, { useState } from "react";
import { Alert, Button, Stack } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./publicStyle.css";

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
    <div className="w-100 d-flex flex-column gap-2 align-items-center">
      <h2 className="text-center mb-4">Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <img
        className="user-image"
        src="image/806962_user_512x512.png"
        alt="user"
      />
      <div className="w-100 d-flex justify-content-center gap-2 mt-2">
        <strong><span>Email :</span></strong>
        <span>{currentUser.email}</span>
      </div>
      <Button className="w-100 mt-4" variant="danger" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default Profile;
