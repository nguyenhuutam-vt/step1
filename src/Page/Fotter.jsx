import React from "react";
import { styled } from "styled-components";
import icon1 from "../asset/icon (5).png";
import icon2 from "../asset/icon (6).png";
import icon3 from "../asset/icon (3).png";
import icon4 from "../asset/icon (4).png";
import { mobile } from "../responsive";
const Fotter = () => {
  const Container = styled.div`
    width: 100%;
    height: 600px;
    display: block;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "block", height: "400px" })}
  `;
  const Wrapper = styled.div`
    height: 300px;
    width: 100%;

    margin-top: 300px;
    display: flex;
    justify-content: space-around;
    ${mobile({ display: "flex", marginTop: "20px" })}
  `;
  const Language = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-transform: capitalize;

    /* Dark */

    color: #000000;
  `;
  const Des = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;

    /* Black 75 */
    width: 392px;
    height: 84px;
    color: rgba(30, 40, 50, 0.75);
    margin-top: 30px;
    ${mobile({
      width: "100%",
      fontSize: "10px",
    })}
  `;

  const Lisa = styled.div`
    ${mobile({
      width: "20%",
    })}
  `;
  const Catalog = styled.div`
    ${mobile({
      width: "20%",
    })}
  `;
  const About = styled.div`
    ${mobile({
      width: "20%",
    })}
  `;
  const Customer = styled.div``;
  const ImgD = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
      marginTop: "110px",
    })}
  `;
  const Imgage = styled.img`
    height: 100%;
    margin-top: 20px;
  `;
  const Ul = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    text-transform: capitalize;

    /* Black */

    color: #1e2832;
    margin-top: 10px;
    ${mobile({
      width: "100%",
      fontSize: "10px",
      marginTop: "30px",
    })}
  `;
  return (
    <Container>
      <Wrapper>
        <Lisa>
          <Language>Lisa</Language>
          <Des>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Des>
          <ImgD>
            <Imgage src={icon3} />
            <Imgage src={icon4} />
            <Imgage src={icon1} />
            <Imgage src={icon2} />
          </ImgD>
        </Lisa>
        <Catalog>
          <Language>Catoglog</Language>
          <Ul>Necklaces</Ul>
          <Ul>hoodies</Ul>
          <Ul>Jewelry Box</Ul>
          <Ul>t-shirt</Ul>
          <Ul>jacket</Ul>
        </Catalog>
        <About>
          <Language>About</Language>
          <Ul>Our Producers</Ul>
          <Ul>Sitemap</Ul>
          <Ul> FAQ</Ul>
          <Ul>About Us</Ul>
          <Ul>Terms & Conditions</Ul>
        </About>
        <About>
          <Language>Customer</Language>
          <Ul>Contact Us</Ul>
          <Ul>Track Your Order</Ul>
          <Ul> Product Care & Repair</Ul>
          <Ul>Book an Appointment</Ul>
          <Ul>Shipping & Returns</Ul>
        </About>
      </Wrapper>
    </Container>
  );
};

export default Fotter;
