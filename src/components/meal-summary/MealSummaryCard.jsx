import React from "react";
import styled from "styled-components";

export const MealSummaryCard = () => {
  return (
    <Container>
      <h3>Delicious Food, Delivered To You</h3>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 854px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  position: absolute;
  z-index: 10;
  top: 358px;
  display: flex;
  flex-direction: column;
  padding-top: 36px;
  padding-bottom: 36px;
  padding-left: 40px;
  padding-right: 54px;
  gap: 25px;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #ffffff;
    text-align: center;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    width: 774px;
    height: 48px;
  }
`;
