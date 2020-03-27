import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import ReactSwipe from "react-swipe";

import discographyBackgroundMobile from "../images/discography-background-mobile.jpg";

const STRAPI_URL = "http://localhost:1337";

const DiscographyBackground = styled.div`
  background-image: url(${discographyBackgroundMobile});
  background-size: cover;
`;

const DiscographyContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const AlbumMediaObject = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  margin: 10px 0;
`;

const AlbumThumbnail = styled.img`
  flex-basis: 130px;
  flex-shrink: 0;
  margin-right: 20px;
`;

const AlbumHeading = styled.h3`
  margin: 0;
  font-style: normal;
  font-weight: 400;
`;

const AlbumQuote = styled.h4`
  margin-top: 10px;
  margin-bottom: 15px;
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  text-align: center;
`;

function chunkArray(array, chunkSize) {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

function Discography() {
  const data = useStaticQuery(graphql`
    query AlbumQuery {
      allStrapiAlbum {
        nodes {
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

  const paginatedAlbums = chunkArray(data.allStrapiAlbum.nodes, 4);

  return (
    <DiscographyBackground>
      <DiscographyContainer>
        <ReactSwipe>
          {paginatedAlbums.map(albumPage => {
            return (
              <div>
                {albumPage.map(album => {
                  return (
                    <>
                      <AlbumMediaObject>
                        <AlbumThumbnail src={STRAPI_URL + album.Cover[0].url} />
                        <div>
                          <AlbumHeading>
                            {album.Artist} - {album.Title.toUpperCase()}
                          </AlbumHeading>
                          <AlbumHeading>({album.Label})</AlbumHeading>
                          <AlbumHeading>{album.Credits}</AlbumHeading>
                        </div>
                      </AlbumMediaObject>
                      <AlbumQuote>
                        {album.Quote} -{" "}
                        <em>{album.Attribution.toUpperCase()}</em>
                      </AlbumQuote>
                    </>
                  );
                })}
              </div>
            );
          })}
        </ReactSwipe>
      </DiscographyContainer>
    </DiscographyBackground>
  );
}

export default Discography;
