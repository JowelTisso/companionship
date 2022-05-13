import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, NotFound, Signup } from "../pages";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
