import React from "react";
import ContentDashboard from "./ContentDashboard";
import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "./DashboardAdmin";

const PageAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<ContentDashboard />} />
    </Routes>
  );
};

export default PageAdmin;
