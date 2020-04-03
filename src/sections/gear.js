import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

import { breakpoint } from "../utilities/breakpoints";

const GearSection = styled.section`
  min-height: 600px;
  display: flex;
`;

const MobileGearBackground = styled(BackgroundImage)`
  @media ${breakpoint.medium} {
    display: none;
  }
`;

const DesktopGearBackground = styled(BackgroundImage)`
  display: none;

  @media ${breakpoint.medium} {
    display: initial;
    width: 50%;
  }
`;

const MobileGearContainer = styled.div`
  text-align: center;
  color: white;
  width: 80%;
  font-size: 14px;
  white-space: pre-wrap;
  margin: 0 auto;

  @media ${breakpoint.medium} {
    display: none;
  }
`;

const DesktopGearContainer = styled.div`
  display: none;

  @media ${breakpoint.medium} {
    display: block;
    width: 50%;
    padding: 0 20px 0 20px;
    color: black;
    background-color: white;
    overflow: hidden;
    text-align: left;
    white-space: pre-wrap;
  }
`;

const GearIntro = styled.div`
  margin: 30px auto;
  width: 90%;

  @media ${breakpoint.medium} {
    margin: 30px 0;
  }
`;

const GearList = styled.div`
  margin-bottom: 30px;
`;

function Gear({ name }) {
  const data = useStaticQuery(graphql`
    query GearQuery {
      desktopBackground: file(
        relativePath: { eq: "gear-desktop-background.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileBackground: file(
        relativePath: { eq: "gear-mobile-background.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allStrapiGearSection {
        nodes {
          id
          gearList
          intro
        }
      }
    }
  `);

  const mobileBackground = data.mobileBackground.childImageSharp.fluid;
  const desktopBackground = data.desktopBackground.childImageSharp.fluid;
  const gearData = data.allStrapiGearSection.nodes;

  return (
    <GearSection>
      <MobileGearBackground
        name={name}
        Tag="div"
        fluid={mobileBackground}
        title="Gear Section Background"
        id="gear"
        role="img"
        preserveStackingContext={true}
        aria-label="Gear Section Background"
      >
        <MobileGearContainer>
          <GearIntro>{gearData[0].intro}</GearIntro>
          <GearList>{gearData[0].gearList}</GearList>
        </MobileGearContainer>
      </MobileGearBackground>
      <DesktopGearBackground
        name={name}
        Tag="div"
        fluid={desktopBackground}
        title="Gear Section Background"
        id="gear"
        role="img"
        preserveStackingContext={true}
        aria-label="Gear Section Background"
      />
      <DesktopGearContainer>
        <GearIntro>{gearData[0].intro}</GearIntro>
        <GearList>{gearData[0].gearList}</GearList>
      </DesktopGearContainer>
    </GearSection>
  );
}

export default Gear;
