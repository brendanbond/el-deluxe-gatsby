import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";

import MobileDiscography from "../components/mobileDiscography";
import { breakpoint } from "../utilities/breakpoints";
import discographyMobileBackground from "../images/discography-mobile-background.jpg";
import discographyDesktopBackground from "../images/discography-desktop-background.jpg";

const DiscographyBackground = styled.div`
  background-image: url(${discographyMobileBackground});
  background-size: cover;

  @media ${breakpoint.medium} {
    background-image: url(${discographyDesktopBackground});
  }
`;

const DiscographyContainer = styled.div`
  margin: auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Discography() {
  const isDesktop = useMediaQuery({ query: breakpoint.medium });
  const albumData = useStaticQuery(graphql`
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

  return (
    <DiscographyBackground>
      <DiscographyContainer>
        {isDesktop ? (
          <div>Desktop Layout</div>
        ) : (
          <MobileDiscography albumData={albumData} />
        )}
      </DiscographyContainer>
    </DiscographyBackground>
  );
}

export default Discography;
