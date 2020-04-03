import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import RecordMediaObject from "../components/recordMediaObject";
import Grid from "../components/grid";
import MobileDiscography from "../components/MobileDiscography";
import { breakpoint } from "../utilities/breakpoints";
import discographyMobileBackground from "../images/discography-mobile-background.jpg";
import discographyDesktopBackground from "../images/discography-desktop-background.jpg";

const DiscographySection = styled.section`
  background-image: url(${discographyMobileBackground});
  background-size: cover;
  min-height: 600px;

  @media ${breakpoint.small} {
    background-image: url(${discographyDesktopBackground});
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
    query AlbumQuery {
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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
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
    <DiscographySection name={name}>
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
            <Img fluid={album.image.childImageSharp.fluid} />
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
