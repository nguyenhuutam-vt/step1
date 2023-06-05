import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import imgZara from "../asset/andrey-zvyagintsev-EQj1ZMpq_VM-unsplash 1.png";
import textZara from "../asset/1024px-Zara_Logo 2.png";
import textZara1 from "../asset/1024px-Zara_Logo 1.png";
const Zara = () => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow: hidden;

    ${mobile({ display: "none" })}
  `;
  const Image = styled.img`
    height: 100%;
    width: 100%;
  `;
  const ImageT = styled.div`
    position: relative;
  `;
  const Title = styled.img`
    position: absolute;

    transform: translate(990px, -650px);
  `;
  const Titlee = styled.img`
    position: absolute;
    transform: translate(1171px, -900px);
  `;
  return (
    <Container>
      <ImageT>
        <Image src={imgZara} />
      </ImageT>
      <Title src={textZara} />
      <Titlee src={textZara1} />
    </Container>
  );
};

export default Zara;
