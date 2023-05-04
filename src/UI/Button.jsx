import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <Buttonn>
      <p className="first">+</p>
      Add
    </Buttonn>
  );
};

const Buttonn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 24px 10px 16px;
  gap: 10px;
  width: 99px;
  height: 41px;
  background-color: #8a2b06;
  border-radius: 20px;
  border: none;
  .first {
    width: 18px;
    height: 18px;
    color: white;
  }
`;

export default Button;
