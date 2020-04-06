import React from "react";
import styled from "styled-components";

import Logo from "../images/logo.png";

const LogoImage = styled.img`
  width: 100px;
  flex-shrink: 0;
  cursor: pointer;
`;

function Brand({ className }) {
  return (
    <LogoImage className={className} src={Logo} alt="Electric Deluxe logo" />
  );
}

export default Brand;
