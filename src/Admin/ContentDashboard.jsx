import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import "./ContentDashboard.css";
import ReChart from "./ReChart";
import { Circle } from "react-circle";
import CircleBar from "./CircleBar";
import FilterListIcon from "@mui/icons-material/FilterList";
import { product, progress, top } from "./data";
import ProgressBar from "@ramonak/react-progress-bar";
const ContentDashboard = () => {
  const Container = styled.div`
    padding: 30px 30px;
    height: 100vh;
    width: 100%;
  `;
  const Chart = styled.div`
    display: flex;
  `;
  const TotalRevenus = styled.div`
    height: 585px;
    width: 70%;
    float: right;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-right: 30px;
    padding: 30px 30px;
  `;
  const Customer = styled.div`
    height: 585px;
    width: 30%;
    float: left;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 30px 30px;
  `;
  const TotalYear = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Language = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #a7a7a7;
  `;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Number = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: #000000;
  `;
  const LanguageC = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;

    color: #535353;
  `;
  const Infor = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: #a7a7a7;
  `;
  const Revenus = styled.div`
    display: flex;
    margin-top: 20px;
  `;
  const Product = styled.div`
    width: 70%;
    height: 341px;
    float: right;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-right: 30px;
    padding: 30px 30px;
  `;
  const OverView = styled.div`
    width: 30%;
    float: left;
    height: 341px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 30px 30px;
  `;
  const Rectangel = styled.div`
    width: 130px;
    height: 80px;
    left: 448px;
    top: 775px;
    display: flex;
    background: #eeeeee;
    border-radius: 10px;
    padding: 10px 15px;
  `;
  const Total = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const LanguageProduct = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #535353;
    margin-top: 10px;
  `;
  const ListP = styled.div`
    width: 100%;
    height: 67px;
    background: #eeeeee;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0px;
  `;
  const Stats = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;

    color: #535353;
  `;
  const LanguageSex = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #535353;
  `;
  return (
    <Container>
      <Chart>
        <TotalRevenus>
          <TotalYear>
            <Language>Total Revenue</Language>
            <Box>
              <FormControl>
                <InputLabel
                  className="inputLabel"
                  id="demo-simple-select-label"
                >
                  This Year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  className="boxSelect"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </TotalYear>
          <Number>$980,273.00</Number>
          <ReChart aspect={2 / 0.5} />
        </TotalRevenus>
        <Customer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <LanguageC>Customers</LanguageC>
            <FilterListIcon />
          </div>
          <Infor>Information About your Customers</Infor>

          <div className="listCircle">
            <div className="circleBar">
              <Circle
                progress={85}
                animate={true} // Boolean: Animated/Static progress
                animationDuration="1s" //String: Length of animation
                responsive={true} // Boolean: Make SVG adapt to parent size
                size={150} // Number: Defines the size of the circle.
                lineWidth={44} // Number: Defines the thickness of the circle's stroke.
                // Number: Update to change the progress and percentage.
                progressColor="#5F27CD" // String: Color of "progress" portion of circle.
                bgColor="#E2E2E2" // String: Color of "empty" portion of circle.
                textColor="#5F27CD" // String: Color of percentage text color.
                textStyle={{
                  font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                }}
                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={true} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
              />
              <div className="des">Current Customers</div>
            </div>
            <div className="circleBar">
              <Circle
                progress={66}
                animate={true} // Boolean: Animated/Static progress
                animationDuration="1s" //String: Length of animation
                responsive={true} // Boolean: Make SVG adapt to parent size
                size={150} // Number: Defines the size of the circle.
                lineWidth={44} // Number: Defines the thickness of the circle's stroke.
                // Number: Update to change the progress and percentage.
                progressColor="#6C6C6C" // String: Color of "progress" portion of circle.
                bgColor="#E2E2E2" // String: Color of "empty" portion of circle.
                textColor="#6C6C6C" // String: Color of percentage text color.
                textStyle={{
                  font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                }}
                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={true} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
              />
              <div className="des">Current Customers</div>
            </div>
            <div className="circleBar">
              <Circle
                progress={90}
                animate={true} // Boolean: Animated/Static progress
                animationDuration="1s" //String: Length of animation
                responsive={true} // Boolean: Make SVG adapt to parent size
                size={150} // Number: Defines the size of the circle.
                lineWidth={44} // Number: Defines the thickness of the circle's stroke.
                // Number: Update to change the progress and percentage.
                progressColor="#FF8918" // String: Color of "progress" portion of circle.
                bgColor="#E2E2E2" // String: Color of "empty" portion of circle.
                textColor="#FF8918" // String: Color of percentage text color.
                textStyle={{
                  font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                }}
                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={true} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
              />
              <div className="des">Current Customers</div>
            </div>
            <div className="circleBar">
              <Circle
                progress={30}
                animate={true} // Boolean: Animated/Static progress
                animationDuration="1s" //String: Length of animation
                responsive={true} // Boolean: Make SVG adapt to parent size
                size={150} // Number: Defines the size of the circle.
                lineWidth={44} // Number: Defines the thickness of the circle's stroke.
                // Number: Update to change the progress and percentage.
                progressColor="#FF6F61" // String: Color of "progress" portion of circle.
                bgColor="#E2E2E2" // String: Color of "empty" portion of circle.
                textColor="#FF6F61" // String: Color of percentage text color.
                textStyle={{
                  font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                }}
                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                roundedStroke={true} // Boolean: Rounded/Flat line ends
                showPercentage={true} // Boolean: Show/hide percentage.
                showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
              />
              <div className="des">Current Customers</div>
            </div>
          </div>
        </Customer>
      </Chart>
      <Revenus>
        <Product>
          <Total>
            {product.map((item) => {
              return (
                <Rectangel>
                  <div style={{ marginRight: "8px" }}>
                    <img
                      src={item.icon}
                      alt=""
                      style={{ backgroundSize: "cover" }}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <div>{item.total}</div>
                      <div>{item.number}</div>
                    </div>
                  </div>
                </Rectangel>
              );
            })}
          </Total>
          <LanguageProduct>Top Products</LanguageProduct>
          {top.map((item) => {
            return (
              <ListP>
                <div>
                  <img src={item.icon} alt="" />
                </div>
                <div>
                  <div>{item.title}</div>
                  <div>{item.des}</div>
                </div>
                <div>
                  <div>{item.iven}</div>
                  <div>{item.number}</div>
                </div>
                <div>
                  <div>{item.sale}</div>
                  <div>{item.salePrice}</div>
                </div>
                <div>
                  <div>{item.price}</div>
                  <div>{item.pricePrice}</div>
                </div>
                <div>
                  <div>{item.today}</div>
                  <div>{item.todayPrice}</div>
                </div>
              </ListP>
            );
          })}
        </Product>
        <OverView>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Stats>Stats Overview</Stats>
            <FilterListIcon />
          </div>
          <Infor>Information About your Customers</Infor>

          {progress.map((item) => {
            return (
              <div style={{ marginTop: "20px" }}>
                <LanguageSex>{item.sex}</LanguageSex>
                <ProgressBar
                  completed={item.complete}
                  customLabel=" "
                  bgColor={item.background}
                  height="10px"
                />
                <div style={{ textAlign: "end" }}>{item.number}</div>
              </div>
            );
          })}
        </OverView>
      </Revenus>
    </Container>
  );
};

export default ContentDashboard;
