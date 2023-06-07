import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import imgZara from "../asset/andrey-zvyagintsev-EQj1ZMpq_VM-unsplash 1.png";
import textZara from "../asset/1024px-Zara_Logo 2.png";
import textZara1 from "../asset/1024px-Zara_Logo 1.png";
const Zara = () => {
  const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: block;

    overflow: hidden;

    ${mobile({ height: "200px" })}
  `;
  const Image = styled.img`
    height: 100%;
    width: 100%;
  `;
  const ImageT = styled.div`
    position: relative;
  `;
  const Title = styled.img`
    transform: translate(1065px, -790px);
    ${mobile({ display: "none" })}
  `;
  const Titlee = styled.img`
    transform: translate(990px, -810px);
    ${mobile({ display: "none" })}
  `;
  const Des = styled.div`
    width: 504px;
    height: 187px;

    /* Paragraph */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    /* or 154% */

    text-transform: capitalize;

    /* Primary */

    color: #ff6f61;
    position: absolute;
    transform: translate(1067px, -760px);
    ${mobile({ display: "none" })}
  `;
  const Btn = styled.button`
    position: absolute;
    width: 237px;
    height: 72px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 34px;
    /* identical to box height */

    text-transform: capitalize;
    transform: translate(200px, -245px);
    ${mobile({
      position: "absolute",
      fontSize: "12px",
      width: "89px",
      transform: "translate(220px, -100px)",
      height: "35px",
    })}
  `;
  return (
    <Container>
      <ImageT>
        <Image src={imgZara} />
      </ImageT>

      <Title src={textZara} />
      <Titlee src={textZara1} />
      <Des>
        Lustrous yet understated. The new evening wear collection exclusively
        offered at the reopened Giorgio Armani boutique in Los Angeles.
      </Des>
      <Btn>See collection</Btn>
    </Container>
  );
};

export default Zara;
