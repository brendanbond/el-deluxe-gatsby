import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { breakpoint } from "../utilities/breakpoints";

const MediaObjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media ${breakpoint.medium} {
    justify-content: center;
  }
`;

const MediaObjectImage = styled(Img)`
  flex-basis: 130px;
  width: 130px;
  flex-shrink: 0;
  margin: 10px;

  @media ${breakpoint.medium} {
    flex-basis: 190px;
    width: 190px;
    flex-shrink: 0;
    margin: 20px;
  }
`;

const MediaObjectBody = styled.div`
  flex-basis: 60%;
  margin: 10px;

  @media ${breakpoint.medium} {
    margin: 20px;
  }
`;

const MediaObjectHeading = styled.h3`
  font-style: normal;
  font-weight: 400;
  margin: 0;
  font-size: 11pt;

  @media ${breakpoint.medium} {
    font-size: inherit;
  }
`;

const Quote = styled.h4`
  display: none;
  font-style: italic;
  font-weight: 400;

  > span {
    font-style: normal;
  }

  @media ${breakpoint.medium} {
    display: block;
  }
`;

function RecordMediaObject({
  image,
  artist,
  title,
  label,
  credits,
  quote,
  attribution
}) {
  return (
    <MediaObjectContainer>
      <MediaObjectImage fluid={image} />
      <MediaObjectBody>
        <MediaObjectHeading>
          {artist} - {title} ({label})
        </MediaObjectHeading>
        <MediaObjectHeading>{credits}</MediaObjectHeading>
        <Quote>
          {quote} -<span>{attribution}</span>
        </Quote>
      </MediaObjectBody>
    </MediaObjectContainer>
  );
}

export default RecordMediaObject;
