import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.user.user);

  return user ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
