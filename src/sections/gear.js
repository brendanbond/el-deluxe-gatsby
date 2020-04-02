import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { breakpoint } from "../utilities/breakpoints";
import gearMobileBackground from "../images/gear-mobile-background.jpg";
import gearDesktopBackground from "../images/gear-desktop-background.jpg";

const GearSection = styled.section`
  background-image: url(${gearMobileBackground});
  background-size: cover;
  overflow: auto;

  @media ${breakpoint.medium} {
    background-image: none;
    display: flex;
    flex-direction: row;
  }
`;

const GearImageContainer = styled.div`
  display: none;

  @media ${breakpoint.medium} {
    display: inherit;
    width: 50%;
    background-image: url(${gearDesktopBackground});
    background-size: cover;
  }
`;

const GearContainer = styled.div`
  text-align: center;
  color: white;
  width: 80%;
  font-size: 14px;
  white-space: pre-wrap;
  margin: 0 auto;

  @media ${breakpoint.medium} {
    width: 50%;
    padding: 0 20px 0 20px;
    color: black;
    background-color: white;
    overflow: hidden;
    text-align: left;
  }
`;

const GearIntro = styled.div`
  margin: 30px auto;
  width: 90%;
`;

const GearList = styled.div`
  margin-bottom: 30px;
`;

function Gear({name}) {
  const data = useStaticQuery(graphql`
    query GearQuery {
      allStrapiGearSection {
        nodes {
          id
          GearList
          IntroParagraph
        }
      }
    }
  `);
  const gearData = data.allStrapiGearSection.nodes;

  return (
    <GearSection name={name}>
      <GearImageContainer />
      <GearContainer>
        <GearIntro>{gearData[0].IntroParagraph}</GearIntro>
        <GearList>{gearData[0].GearList}</GearList>
      </GearContainer>
    </GearSection>
  );
}

export default Gear;
