import React, { useState } from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import { explore, graphic } from "./Graphic";
import category from "../asset/image-category-1.png";
import { hover } from "@testing-library/user-event/dist/hover";
import "./Brand.css";
const Brand = () => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow: hidden;

    ${mobile({ display: "block" })}
  `;
  const Wrapper = styled.div`
    margin-top: 80px;
    padding: 10px 110px;
    width: 100%;
    height: 70px;
    display: flex;

    ${mobile({
      padding: "10px 0px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    })}
  `;
  const Graphic = styled.div`
    /* flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 80px; */
  `;
  const ImgContainer = styled.div`
    width: 100%;
    height: 70px;
    ${mobile({ padding: "10px 0px" })}
  `;
  const Image = styled.img`
    height: 100%;
  `;
  const Imagee = styled.img`
    /* height: 90%;
    margin-left: 40px; */
  `;
  const Explore = styled.div`
    width: 100%;
    height: 648px;
    padding: 10px 150px;
    display: flex;
    margin-top: 70px;
    ${mobile({ padding: "130px 0px" })}
  `;
  const Left = styled.div`
    flex: 0.5;

    color: wheat;
  `;
  const Right = styled.div`
    flex: 1;
    margin-right: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 100px;
  `;
  const ExploreRight = styled.div`
    width: 312px;
    height: 312px;
  `;
  const Langue = styled.div`
    -webkit-transform: rotate(-90deg);

    /* Firefox */
    -moz-transform: rotate(-90deg);

    /* IE */
    -ms-transform: rotate(-90deg);

    /* Opera */
    -o-transform: rotate(-90deg);

    float: left;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: black;
    position: absolute;
    top: 500px;

    /* right: 51px; */
    left: -85px;
    ${mobile({ display: "none" })}
  `;
  return (
    <Container>
      <Wrapper>
        {graphic.map((item) => {
          return (
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          );
        })}
      </Wrapper>
      <Explore>
        <Left>
          <Langue>Explore new and popular styles</Langue>{" "}
          <Image src={category} />
        </Left>
        <Right>
          {explore.map((item) => {
            return (
              // <ExploreRight class="container">
              //   <Imagee src={item.img} class="image" />
              //   <div class="middle">
              //     <div class="text">John Doe</div>
              //   </div>
              // </ExploreRight>
              <div class="container">
                <img src={item.img} alt="Avatar" class="image" />
                <div class="middle">
                  <div class="text">John Doe</div>
                </div>
              </div>
            );
          })}
        </Right>
      </Explore>
    </Container>
  );
};

export default Brand;
