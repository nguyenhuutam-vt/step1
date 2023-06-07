import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import { Button } from "@mui/material";
import { productL } from "./Graphic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Best.css";
import icon1 from "../asset/icon (1).png";
import icon2 from "../asset/icon (2).png";
import "./Best.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <img
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          right: "90px",
          top: "200px",
          height: "40px",
        }}
        id="Arrow"
        className={className}
        src={icon2}
        alt=""
        onClick={onClick}
      />
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <img
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "1",
        left: "5px",
        top: "200px",
        height: "40px",
      }}
      src={icon1}
      alt=""
      onClick={onClick}
    />
  );
}
const Best = () => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: block;

    overflow: hidden;
    position: relative;
    ${mobile({ display: "block" })}
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
    ${mobile({ padding: "10px 0px" })}
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
  const Product = styled.div``;
  const Filter = styled.div`
    width: 92px;
    height: 32px;
    background: #1e2832;
    color: white;
    text-align: center;
  `;
  const Wrapperr = styled.div`
    /* padding: 10px 110px;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 25px;
    row-gap: 110px; */
    width: 88%;
    margin: 0 auto;
    margin-top: 50px;
  `;
  const ListP = styled.div``;
  const Image = styled.img`
    height: 100%;

    object-fit: cover;
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
  const CategoryT = styled.div`
    display: flex;
    justify-content: space-between;
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow className="sample" />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Language>Best sellers</Language>
      <Wrapper>
        <Product>
          {" "}
          <Button className="btn">all products</Button>
          <Button className="btn">t-shirt</Button>
          <Button className="btn">hoodies</Button>
          <Button className="btn">jacket</Button>
        </Product>
        <Filter>
          <p>Show All</p>
        </Filter>
      </Wrapper>
      {/* <Wrapperr>
        {productL.map((item) => {
          return (
            <Slider {...settings}>
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
            </Slider>
          );
        })}
      </Wrapperr> */}
      <Wrapperr>
        <Slider {...settings}>
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
        </Slider>
      </Wrapperr>
    </Container>
  );
};

export default Best;
