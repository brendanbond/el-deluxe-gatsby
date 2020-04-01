import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const GallerySection = styled.section`
  width: 80%;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const GalleryImageContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  margin: 0 2px;
  cursor: pointer;
  &:hover {
    > img {
      transform: scale(1.05);
      transform-origin: 50% 50%;
    }
`;

const GalleryImage = styled.img`
  transition: 0.4s ease;
`;

const GalleryImageRenderer = ({ index, photo, onClick }) => {
  return (
    <GalleryImageContainer
      onClick={event => onClick(event, { index })}
      width={photo.width}
      height={photo.height}
    >
      <GalleryImage {...photo} alt={`${index} in gallery`} />
    </GalleryImageContainer>
  );
};

const getAspectRatio = float => {
  let width, height;
  for (let i = 1; i < 20; ++i) {
    height = i;
    width = Math.round(float * height + 0.5); // Mathematical rounding
    if (Math.abs(float - width / height) < 0.01) {
      break;
    }
  }
  return [width, height];
};

function Gallery({name}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query PhotoQuery {
      allStrapiPhoto {
        nodes {
          Image {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
              original {
                src
                width
                height
              }
            }
          }
        }
      }
    }
  `);

  const photos = data.allStrapiPhoto.nodes.map(photo => {
    let [width, height] = getAspectRatio(
      photo.Image.childImageSharp.fluid.aspectRatio
    );
    return {
      src: photo.Image.childImageSharp.fluid.src,
      width: width,
      height: height
    };
  });

  const originalPhotos = data.allStrapiPhoto.nodes.map(photo => {
    return {
      src: photo.Image.childImageSharp.original.src,
      width: photo.Image.childImageSharp.original.width,
      height: photo.Image.childImageSharp.original.height
    };
  });

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imageRenderer = useCallback(
    ({ index, photo }) => (
      <GalleryImageRenderer
        onClick={openLightbox}
        photo={photo}
        index={index}
        key={index}
      />
    ),
    [openLightbox]
  );

  return (
    <GallerySection name={name}>
      <PhotoGallery photos={photos} renderImage={imageRenderer} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={originalPhotos.map(photo => ({
                src: photo.src,
                width: photo.width,
                height: photo.height
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </GallerySection>
  );
}

export default Gallery;
