import React from "react";
import styled from "styled-components";
import ReactSwipe from "react-swipe";

import RecordMediaObject from "./recordMediaObject";

const Quote = styled.h4`
  text-align: center;
  font-style: italic;
  margin-top: 5px;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 13px;
`;
function DiscographySwiper({ albumData, setCurrentPage }) {
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
                  <RecordMediaObject
                    image={album.image.childImageSharp.fluid}
                    artist={album.artist}
                    title={album.title}
                    label={album.label}
                    credits={album.credits}
                  />
                  <Quote>
                    {album.quote} -{album.attribution}
                  </Quote>
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </ReactSwipe>
  );
}

export default React.memo(DiscographySwiper);
