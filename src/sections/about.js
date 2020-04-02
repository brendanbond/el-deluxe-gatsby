import React from "react";
import styled from "styled-components";

import { breakpoint } from "../utilities/breakpoints";
import aboutBackgroundMobile from "../images/about-background-mobile.png";
import aboutBackgroundDesktop from "../images/about-background-desktop-v3.jpg";
import facebookSocialIcon from "../images/facebook-social-icon.svg";
import instagramSocialIcon from "../images/instagram-social-icon.svg";

const AboutSection = styled.section`
  height: 650px;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  padding-top: 15%;

  @media ${breakpoint.medium} {
    height: 790px;
    overflow: visible;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${aboutBackgroundMobile});
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: -75px;
  width: 100%;
  height: 725px;
  z-index: -1;

  @media ${breakpoint.medium} {
    background-image: url(${aboutBackgroundDesktop});
    background-position: top left;
    height: 865px;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 0 auto;

  @media ${breakpoint.medium} {
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    width: 40%;
    margin: 0 0 0 50%;
    font-size: 12pt;
  }

  @media ${breakpoint.large} {
    font-size: 14pt;
  }
`;

const AboutHeading = styled.h1`
  margin: 5px 0;
  font-size: 1.25em;

  @media ${breakpoint.medium} {
    font-size: 1.5em;
  }
`;

const AboutSubHeading = styled.h4`
  margin: 5px 0;
  font-style: normal;
`;

const AboutParagraph = styled.h4`
  font-style: normal;
  margin: 40px 0 10px 0;
`;

const SocialIcons = styled.div`
  display: inline;
  margin: 5px auto;

  @media ${breakpoint.medium} {
    margin: 0;
  }
`;

const SocialIcon = styled.img`
  margin: 0 10px;
`;

/* Recording studio/production house in South Austin, TX, owned and operated by 
Grammy Award winning producer Adrian Quesada. A creative space where analog meets
digital - “taking queues from hip-hop and psychedelic genres and parring them with a 
mix of classic and modern recording techniques, and a live off-the-floor approach” 
(Tape Op). Electric Deluxe strives to push the envelope of modern music with a timeless 
aesthetic, delivering tuff sounds and maximum freshness
 */
function About({ name }) {
  return (
    <AboutSection name={name}>
      <BackgroundImage />
      <AboutContainer>
        <AboutHeading>ELECTRIC DELUXE RECORDERS</AboutHeading>
        <AboutSubHeading>
          is a recording studio and production house in South Austin, Texas owned and operated by
          award-winning producer
        </AboutSubHeading>
        <AboutHeading>ADRIAN QUESADA.</AboutHeading>
        <AboutParagraph>
          A creative space where analog meets digital - “taking cues from
          hip-hop and psychedelic genres and pairing them with a mix of classic
          and modern recording techniques and a live off-the-floor approach”
          (Tape Op). Electric Deluxe strives to push the envelope of modern
          music with by delivering a timeless aesthetic, tuff sounds, and
          maximum freshness.
        </AboutParagraph>
        <SocialIcons>
          <SocialIcon
            src={facebookSocialIcon}
            width="30px"
            alt="Facebook social icon"
          />
          <SocialIcon
            src={instagramSocialIcon}
            width="30px"
            alt="Instagram social icon"
          />
        </SocialIcons>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
