import React from "react";
import styled from "styled-components";

const StyledMenuButton = styled.button`
  height: 33px;
  background-color: transparent;
  border: 4px solid white;
  border-radius: 4px;
  color: white;
  font-family: inherit;
  cursor: pointer;
`;

function MobileNavButton({ className, onClick }) {
  return (
    <StyledMenuButton className={className} onClick={onClick}>
      Menu
    </StyledMenuButton>
  );
}

export default MobileNavButton;
