import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}
