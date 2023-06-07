import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import { Button } from "@mui/material";
import product from "../asset/image-product-3.png";
import { productL } from "./Graphic";
const Newsletter = () => {
  const Container = styled.div`
    width: 100%;
    height: 1300px;
    display: block;
    position: relative;
    overflow: hidden;
    ${mobile({ padding: "30px 20px", height: "100%" })}
  `;

  const Language = styled.div`
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
  `;
  const Wrapper = styled.div`
    margin-top: 80px;
    padding: 10px 110px;
    width: 90%;
    height: 70px;
    display: flex;
    justify-content: space-between;

    ${mobile({ padding: "10px 0px" })}
    .btn {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      /* identical to box height */

      text-transform: capitalize;

      /* Dark */

      color: #000000;
    }
  `;
  const Wrapperr = styled.div`
    padding: 10px 110px;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 25px;
    row-gap: 110px;
    ${mobile({ padding: "10px 0px", display: "block" })}
  `;

  const Filter = styled.div`
    width: 92px;
    height: 32px;
    background: #1e2832;
    color: white;
    text-align: center;
  `;
  const ListP = styled.div`
    width: 312px;
    height: 400px;

    ${mobile({ padding: "40px 13px" })}
  `;
  const Image = styled.img`
    height: 100%;
  `;
  const BottomList = styled.div`
    width: 292px;
    height: 60px;
    padding: 10px 10px;
  `;
  const Des = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  `;
  const Category = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-transform: capitalize;

    /* Dark 50 */

    color: rgba(0, 0, 0, 0.5);
  `;
  const CategoryT = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Price = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-align: right;
    text-transform: capitalize;

    /* Dark */

    color: #000000;
  `;
  const Product = styled.div``;
  return (
    <Container>
      <Language>Or subscribe to the newsletter</Language>
      <Wrapper>
        <Product>
          {" "}
          <Button className="btn">all products</Button>
          <Button className="btn">t-shirt</Button>
          <Button className="btn">hoodies</Button>
          <Button className="btn">jacket</Button>
        </Product>
        <Filter>
          <p>Filter</p>
        </Filter>
      </Wrapper>
      <Wrapperr>
        {productL.map((item) => {
          return (
            <ListP>
              <Image src={item.img} />
              <BottomList>
                <Des>{item.des}</Des>
                <CategoryT>
                  <Category>{item.category}</Category>
                  <Price>{item.price}</Price>
                </CategoryT>
              </BottomList>
            </ListP>
          );
        })}
      </Wrapperr>
    </Container>
  );
};

export default Newsletter;
