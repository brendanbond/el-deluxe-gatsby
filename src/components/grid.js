import React from "react";
import styled from "styled-components";

const GridRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const GridItem = styled.div`
  flex-basis: 12vw;
  margin: 5px;
  flex-shrink: 0;
`;

function Grid({ items, onClick, onMouseEnter, className }) {
  return (
    <GridRow className={className}>
      {items.map((item, index) => {
        return (
          <GridItem
            key={`grid-item-${index}`}
            onMouseEnter={event => onClick(index, event)}
            onClick={event => onMouseEnter(index, event)}
          >
            {item}
          </GridItem>
        );
      })}
    </GridRow>
  );
}

export default Grid;
