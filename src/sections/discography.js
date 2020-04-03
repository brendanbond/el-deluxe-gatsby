import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

import RecordMediaObject from "../components/recordMediaObject";
import Grid from "../components/grid";
import MobileDiscography from "../components/mobileDiscography";
import { breakpoint } from "../utilities/breakpoints";

const DiscographySection = styled(BackgroundImage)`
  position: relative;
  min-height: 600px;

  @media ${breakpoint.small} {
    padding-bottom: 50px;
  }
`;

const DiscographyContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakpoint.medium} [
    width: 90%;
  ]
`;

const AlbumSpotlightContainer = styled.div`
  display: none;

  @media ${breakpoint.medium} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    width: 90%;
    height: 220px;
  }
`;

const AlbumGrid = styled(Grid)`
  display: none;

  @media ${breakpoint.medium} {
    display: flex;
  }
`;

const MobileDiscographyContainer = styled.div`
  @media ${breakpoint.medium} {
    display: none;
  }
`;

function Discography({ name }) {
  const data = useStaticQuery(graphql`
    query {
      mobileBackground: file(
        relativePath: { eq: "discography-mobile-background.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopBackground: file(
        relativePath: { eq: "discography-desktop-background.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allStrapiAlbum {
        nodes {
          id
          artist
          attribution
          credits
          label
          quote
          title
          image {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const background = data.desktopBackground.childImageSharp.fluid;

  const albumData = data.allStrapiAlbum.nodes;
  const [currentAlbumSpotlight, setCurrentAlbumSpotlight] = useState(0);

  const handleMouseEnter = (index, event) => {
    event.preventDefault();
    setCurrentAlbumSpotlight(index);
  };

  const handleClick = (index, event) => {
    event.preventDefault();
    setCurrentAlbumSpotlight(index);
  };

  return (
    <DiscographySection
      name={name}
      Tag="section"
      fluid={background}
      title="Discography Background"
      id="discography"
      role="img"
      aria-label="Discography Background"
      preserveStackingContext={true}
    >
      <DiscographyContainer>
        <AlbumSpotlightContainer>
          <RecordMediaObject
            image={albumData[currentAlbumSpotlight].image.childImageSharp.fluid}
            artist={albumData[currentAlbumSpotlight].artist}
            title={albumData[currentAlbumSpotlight].title}
            label={albumData[currentAlbumSpotlight].label}
            credits={albumData[currentAlbumSpotlight].credits}
            quote={albumData[currentAlbumSpotlight].quote}
            attribution={albumData[currentAlbumSpotlight].attribution}
          />
        </AlbumSpotlightContainer>
        <AlbumGrid
          items={albumData.map(album => (
            <Image fluid={album.image.childImageSharp.fluid} />
          ))}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
        />
        <MobileDiscographyContainer>
          <MobileDiscography albumData={albumData} />
        </MobileDiscographyContainer>
      </DiscographyContainer>
    </DiscographySection>
  );
}

export default Discography;
