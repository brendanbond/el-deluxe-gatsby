import React, { useState } from "react";
import PageIndicators from "../components/pageIndicators";
import MobileDiscographySwiper from "./mobileDiscographySwiper";

function chunkArray(array, chunkSize) {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

function MobileDiscography({ albumData }) {
  const paginatedAlbums = chunkArray(albumData, 4);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSwipeTransitionEnd = (index, el) => {
    setCurrentPage(index);
  };

  return (
    <>
      <PageIndicators
        numberPages={paginatedAlbums.length}
        currentPage={currentPage}
      />
      <MobileDiscographySwiper
        albumData={paginatedAlbums}
        currentPage={currentPage}
        onSwipeTransitionEnd={handleSwipeTransitionEnd}
      />
    </>
  );
}

export default MobileDiscography;
