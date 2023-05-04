import React from "react";
import { Content } from "../content/content";
import styled from "styled-components";

export const Meals = () => {
  return (
    <Container>
      <Content />
    </Container>
  );
};

const Container = styled.div`
  background: #b0b0b0;
  padding: 135px 200px 100px 100px;
`;
