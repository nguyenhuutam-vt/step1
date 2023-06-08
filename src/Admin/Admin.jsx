import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import SideBarr from "./SideBar";

const Admin = () => {
  const Container = styled.div``;
  const Sidebar = styled.div`
    width: 20%;
    background-color: red;
    height: 100%;
  `;
  const Content = styled.div`
    width: 80%;
    background-color: black;
    height: 100%;
  `;
  return (
    <Container>
      <SideBarr />
    </Container>
  );
};

export default Admin;
