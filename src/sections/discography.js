import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";

import MobileDiscography from "../components/mobileDiscography";
import { breakpoint } from "../utilities/breakpoints";
import discographyMobileBackground from "../images/discography-mobile-background.jpg";
import discographyDesktopBackground from "../images/discography-desktop-background.jpg";

const STRAPI_URL = "http://localhost:1337";

const DiscographyBackground = styled.section`
  background-image: url(${discographyMobileBackground});
  background-size: cover;
  min-height: 650px;

  @media ${breakpoint.small} {
    background-image: url(${discographyDesktopBackground});
  }
`;

const DiscographyContainer = styled.div`
  margin: auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const AlbumSpotlightImage = styled.img`
  width: 200px;
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
  margin: auto;
`;

const AlbumGridItem = styled.div`
  width: 175px;
  flex-basis: 10vw;
  margin: 5px 5px 5px 5px;
`;

const AlbumImage = styled.img`
  max-width: 125px;
`;

function Discography() {
  const isDesktop = useMediaQuery({ query: breakpoint.small });
  const data = useStaticQuery(graphql`
    query AlbumQuery {
      allStrapiAlbum {
        nodes {
          id
          Artist
          Attribution
          Credits
          Label
          Quote
          Title
          Cover {
            url
          }
        }
      }
    }
  `);
  const albumData = data.allStrapiAlbum.nodes;
  const [currentAlbumSpotlight, setCurrentAlbumSpotlight] = useState(0);
  const albumSpotlightRef = useRef(0);

  const handleMouseEnter = (index, event) => {
    event.preventDefault();
    setCurrentAlbumSpotlight(index);
  };

  const handleMouseLeave = event => {
    event.preventDefault();
    setCurrentAlbumSpotlight(albumSpotlightRef.current);
  };

  const handleClick = (index, event) => {
    event.preventDefault();
    setCurrentAlbumSpotlight(index);
    albumSpotlightRef.current = index;
  };

  return (
    <DiscographyBackground>
      <DiscographyContainer>
        {isDesktop ? (
          <>
            <AlbumSpotlightContainer>
              <AlbumSpotlightImage
                src={STRAPI_URL + albumData[currentAlbumSpotlight].Cover[0].url}
                alt={`Cover art for the album  ${albumData[currentAlbumSpotlight].Title}`}
              />
              <AlbumSpotlightTextContainer>
                <AlbumSpotlightHeader>
                  {albumData[currentAlbumSpotlight].Artist.toUpperCase()} -{" "}
                  {albumData[currentAlbumSpotlight].Title.toUpperCase()} (
                  {albumData[currentAlbumSpotlight].Label})
                </AlbumSpotlightHeader>
                <AlbumSpotlightHeader>
                  {albumData[currentAlbumSpotlight].Credits}
                </AlbumSpotlightHeader>
                <AlbumSpotlightQuote>
                  {albumData[currentAlbumSpotlight].Quote} {"  "}-
                  <AlbumSpotlightAttribution>
                    {albumData[currentAlbumSpotlight].Attribution}
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
                    onMouseLeave={handleMouseLeave}
                    onClick={event => handleClick(index, event)}
                  >
                    <AlbumImage
                      src={STRAPI_URL + album.Cover[0].url}
                      alt={`Cover art for the album ${album.Title}`}
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
    </DiscographyBackground>
  );
}

export default Discography;
