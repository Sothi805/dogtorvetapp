import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Dashboard from "../pages/home/dashboard/Dashboard";
import PetRegister from "../pages/home/pet_registration/PetRegister";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {/* Default route for /home */}
        <Route index element={<Dashboard />} />
        {/* Nested route for /home/dashboard */}
        <Route path="dashboard" element={<Dashboard />} />
        {/* Nested route for /home/pet-register */}
        <Route path="pet-register" element={<PetRegister />} />
      </Route>
    </Routes>
  );
};

export default HomeRoute;
