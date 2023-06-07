import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import icons from "../asset/icons_payment 1.png";
import { Button } from "@mui/material";
const Card = () => {
  const Container = styled.div`
    width: 100%;
    height: 52px;
    display: block;
    position: relative;
    overflow: hidden;
    background-color: #1e2832;
    ${mobile({ display: "flex" })}
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  `;
  const Lisa = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-transform: capitalize;

    /* White */

    color: #ffffff;
    ${mobile({ display: "flex" })}
  `;
  const Imgae = styled.img`
    width: 283px;
    height: 24px;
  `;

  return (
    <Container>
      <Wrapper>
        <Lisa>© 2023 LISA , Inc.</Lisa>
        <Imgae src={icons} />
        <Button>Scroll To Top</Button>
      </Wrapper>
    </Container>
  );
};

export default Card;
