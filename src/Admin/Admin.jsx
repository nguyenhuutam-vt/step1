import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import SideBarr from "./SideBar";
import Dashboard from "./Dashboard";
import ContentDashboard from "./ContentDashboard";

const Admin = () => {
  return (
    <SideBarr>
      {" "}
      <ContentDashboard />
    </SideBarr>
  );
};

export default Admin;
