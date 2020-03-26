import React from "react";
import styled from "styled-components";

const RecordDisplayContainer = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  align-items: center;
`;

const RecordDisplayImage = styled.div`
  margin-right: 30px;
`;

const RecordDisplay = ({ image, albumData }) => {
  return (
  <RecordDisplayContainer>
    <RecordDisplayImage>
      <img src={image} />
    </RecordDisplayImage>
    <RecordDisplayBody>

    </RecordDisplayBody>
  </RecordDisplayContainer>);
};
