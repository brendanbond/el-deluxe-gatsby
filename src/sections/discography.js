import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";

import MobileDiscography from "../components/mobileDiscography";
import Img from "gatsby-image";
import { breakpoint } from "../utilities/breakpoints";
import discographyMobileBackground from "../images/discography-mobile-background.jpg";
import discographyDesktopBackground from "../images/discography-desktop-background.jpg";

const DiscoraphySection = styled.section`
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 80%;
  height: 220px;
`;

const AlbumSpotlightImage = styled.div`
  flex-basis: 190px;
  flex-shrink: 0;
  margin-right: 30px;
`;

const AlbumSpotlightTextContainer = styled.div`
  flex-shrink: 0;
  flex-basis: 70%;
`;

const AlbumSpotlightHeader = styled.h1`
  font-style: normal;
  margin: 0px;
  font-size: 18px;

  @media ${breakpoint.medium} {
    font-size: 1.75vw;
  }
`;

const AlbumSpotlightQuote = styled.h3`
  font-style: italic;
  margin-top: 30px;
  font-size: 18px;

  @media ${breakpoint.medium} {
    font-size: 1.7vw;
  }
`;

const AlbumSpotlightAttribution = styled.em`
  font-style: normal;
`;

const AlbumGridRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 99%;
  margin: 0 auto;
`;

const AlbumGridItem = styled.div`
  flex-basis: 12vw;
  margin: 5px 5px 5px 5px;
  flex-shrink: 0;
`;

function Discography({ name }) {
  const isDesktop = useMediaQuery({ query: breakpoint.small });
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
    <DiscoraphySection name={name}>
      <DiscographyContainer>
        {isDesktop ? (
          <>
            <AlbumSpotlightContainer>
              <AlbumSpotlightImage>
                <Img
                  fluid={
                    albumData[currentAlbumSpotlight].image.childImageSharp.fluid
                  }
                />
              </AlbumSpotlightImage>
              <AlbumSpotlightTextContainer>
                <AlbumSpotlightHeader>
                  {albumData[currentAlbumSpotlight].artist.toUpperCase()} -{" "}
                  {albumData[currentAlbumSpotlight].title.toUpperCase()} (
                  {albumData[currentAlbumSpotlight].label})
                </AlbumSpotlightHeader>
                <AlbumSpotlightHeader>
                  {albumData[currentAlbumSpotlight].credits}
                </AlbumSpotlightHeader>
                <AlbumSpotlightQuote>
                  {albumData[currentAlbumSpotlight].quote} {"  "}-
                  <AlbumSpotlightAttribution>
                    {albumData[currentAlbumSpotlight].attribution}
                  </AlbumSpotlightAttribution>
                </AlbumSpotlightQuote>
              </AlbumSpotlightTextContainer>
            </AlbumSpotlightContainer>
            <AlbumGridRow>
              {albumData.map((album, index) => {
                return (
                  <AlbumGridItem
                    key={`Album_${album.id}`}
                    onMouseEnter={event => handleMouseEnter(index, event)}
                    onClick={event => handleClick(index, event)}
                  >
                    <Img
                      fluid={album.image.childImageSharp.fluid}
                      alt={`Cover art for the album ${album.title}`}
                    />
                  </AlbumGridItem>
                );
              })}
            </AlbumGridRow>
          </>
        ) : (
          <MobileDiscography albumData={albumData} />
        )}
      </DiscographyContainer>
    </DiscoraphySection>
  );
}

export default Discography;
