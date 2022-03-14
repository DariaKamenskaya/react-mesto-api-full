import React from 'react';
import {Navigate } from "react-router-dom";

const RequireAuth = ({ loggedIn, children  }) => {
  return loggedIn ? children : <Navigate to="/sign-in" />
  }

export default RequireAuth;