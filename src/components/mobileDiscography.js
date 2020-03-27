import React from "react";
import styled from "styled-components";
import ReactSwipe from "react-swipe";

const AlbumMediaObject = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  margin: 30px 0;
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

const STRAPI_URL = "http://localhost:1337";

function chunkArray(array, chunkSize) {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

function MobileDiscography({ albumData }) {
  const paginatedAlbums = chunkArray(albumData.allStrapiAlbum.nodes, 4);
  return (
    <ReactSwipe>
      {paginatedAlbums.map((albumPage, index) => {
        return (
          <div key={`page-${index}`}>
            {albumPage.map(album => {
              return (
                <React.Fragment key={`album-${album.id}`}>
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
                    {album.Quote} - <em>{album.Attribution.toUpperCase()}</em>
                  </AlbumQuote>
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </ReactSwipe>
  );
}

export default MobileDiscography;
