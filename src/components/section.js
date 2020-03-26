import React from "react";
import styled from "styled-components";

const Section = styled.div`
  background-color: black;
  background-size: cover;
  background-image: url(${props => props.backgroundImage});
`;

export default Section;
