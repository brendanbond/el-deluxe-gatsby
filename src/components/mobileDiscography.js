import React, { useState, useMemo } from "react";
import PageIndicators from "./pageIndicators";
import DiscographySwiper from "./discographySwiper";

function chunkArray(array, chunkSize) {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

function MobileDiscography({ albumData }) {
  const [currentPage, setCurrentPage] = useState(0);
  const paginatedAlbums = useMemo(() => chunkArray(albumData, 4), [albumData]);

  return (
    <>
      <PageIndicators
        numberPages={paginatedAlbums.length}
        currentPage={currentPage}
      />
      <DiscographySwiper
        albumData={paginatedAlbums}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default MobileDiscography;
