import React from "react";
import styled from "styled-components";

const PageIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageIndicator = styled.span`
  height: 12px;
  width: 12px;
  margin: 0 10px;
  background-color: ${props =>
    props.active ? "rgb(255, 255, 255, 1.0)" : "rgb(255, 255, 255, 0.24)"};
  border-radius: 50%;
}
`;

function PageIndicators({ numberPages, currentPage }) {
  const renderPageIndicators = () => {
    let pageIndicators = [];
    for (let i = 0; i < numberPages; i++) {
      let isCurrentPage = false;
      if (i === currentPage) isCurrentPage = true;
      pageIndicators.push(
        <PageIndicator key={`pageIndicator-${i}`} active={isCurrentPage} />
      );
    }
    return pageIndicators;
  };
  return (
    <PageIndicatorContainer>{renderPageIndicators()}</PageIndicatorContainer>
  );
}

export default PageIndicators;
