import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const userInfo = useSelector((state) => state.reducer2.userInfo);
  return userInfo ? children : <Navigate to="/signin" />;
}
