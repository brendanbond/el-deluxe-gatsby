import React from "react";
import styled from "styled-components";
import ReactSwipe from "react-swipe";
import Img from "gatsby-image";

const AlbumMediaObject = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  margin: 30px 0 15px 0;
`;

const AlbumThumbnail = styled.div`
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
  margin-top: 5px;
  margin-bottom: 15px;
  font-style: italic;
  font-weight: 700;
  font-size: 13px;
  text-align: center;
`;

function mobileDiscographySwiper({ albumData, setCurrentPage }) {
  return (
    <ReactSwipe
      key={albumData.length}
      swipeOptions={{
        transitionEnd: index => setCurrentPage(index)
      }}
      childCount={albumData.length}
    >
      {albumData.map((albumPage, index) => {
        return (
          <div key={`page-${index}`}>
            {albumPage.map(album => {
              return (
                <React.Fragment key={`album-${album.id}`}>
                  <AlbumMediaObject>
                    <AlbumThumbnail>
                      <Img fluid={album.Cover.childImageSharp.fluid} />
                    </AlbumThumbnail>
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

export default React.memo(mobileDiscographySwiper);
