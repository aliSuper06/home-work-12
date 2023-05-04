import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/images/summary-image.png";
import { MealSummaryCard } from "./MealSummaryCard";

const MealSummary = () => {
  return (
    <Container>
      <img src={summaryImage} alt="summary" />
      <MealSummaryCard />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 432px;
  }
`;

export default MealSummary;
