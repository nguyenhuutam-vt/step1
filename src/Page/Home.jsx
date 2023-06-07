import React from "react";

import { styled } from "styled-components";
import { mobile } from "../responsive";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, MenuItem } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
const Container = styled.div`
  height: 60px;
  background-color: #f0f0f0;
  ${mobile({ height: "50px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 10px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "15px" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-family: "AmstelvarAlpha";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 50px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const SearchContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language></Language>
          <SearchContainer>
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Lisa Shope</Logo>
        </Center>
        <Right>
          <MenuItem>
            <PersonIcon />
            Account
          </MenuItem>
          <MenuItem>
            <LocalMallIcon />
            Shopping
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
