import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons//Basket.svg";

const OrderBusket = ({ children }) => {
  return (
    <Button>
      <BasketIcon />
      <span>{children}</span>
      <p>7</p>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #4d1601;
  }
  p {
    width: 51px;
    height: 35px;
    background: #8a2b06;
    border-radius: 30px;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default OrderBusket;
