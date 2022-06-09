import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoutes({ children }) {
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to="/signin" />;
}
