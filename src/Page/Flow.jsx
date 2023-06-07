import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import { flow } from "./Graphic";

const Flow = () => {
  const Container = styled.div`
    width: 100%;
    height: 700px;
    display: block;
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
    ${mobile({ display: "block" })}
  `;
  const Language = styled.div`
    height: 59px;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    ${mobile({ fontSize: "20px", marginTop: "20px" })}
  `;
  const Languagee = styled.div`
    height: 59px;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Primary */

    color: #ff6f61;
  `;
  const List = styled.div`
    display: flex;
    padding: 30px 175px;
    justify-content: space-around;
    ${mobile({
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGgap: "15px",
      rowGap: "15px",
    })}
  `;
  return (
    <Container>
      <Language>Follow products and discounts on Instagram</Language>
      <List>
        {flow.map((item) => {
          return (
            <div>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </List>
      <Languagee>@lisa.official</Languagee>
    </Container>
  );
};
export default Flow;
