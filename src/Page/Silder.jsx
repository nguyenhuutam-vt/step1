import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import product from "../asset/image-product.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "./Silder.css";
import { mobilee } from "./rs";
const Silder = () => {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #f0f0f0;
    ${mobile({ display: "block" })}
  `;
  const Wrapper = styled.div`
    height: 100%;
    padding: 10px 150px;
    display: flex;
    ${mobile({ display: "block", padding: "10px 0px" })}
  `;
  const ImgContainer = styled.div`
    width: 442px;
    height: 562px;
    flex: 1;
    ${mobile({ display: "none" })}
  `;
  const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #f0f0f0;
    align-items: center;
  `;
  const Image = styled.img`
    height: 100%;
  `;
  const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
  `;
  const InfoContainerr = styled.div`
    flex: 1;
    padding: 50px;
    width: 686px;
    height: 364px;
    left: 300px;
    top: 299px;
  `;
  const Title = styled.h1`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    ${mobile({ fontSize: "55px" })}
  `;
  const Desc = styled.p`
    margin: 50px 0px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
  `;
  const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    width: 223px;
    height: 72px;
    left: 304px;
    top: 591px;

    /* Black */

    background: #1e2832;
    color: #ffffff;
  `;
  return (
    <Container>
      <Wrapper>
        <Slide>
          <InfoContainerr>
            <Title>Collections</Title>
            <Desc>
              You can explore ans shop many differnt collection from various
              barands here.
            </Desc>
            <Button className="btn">
              <LocalMallIcon /> SHOW NOW
            </Button>
          </InfoContainerr>
          <ImgContainer>
            <Image src={product} />
          </ImgContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Silder;
