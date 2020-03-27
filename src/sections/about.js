import React from "react";
import styled from "styled-components";
import aboutBackgroundMobile from "../images/about-background-mobile.png";
import aboutBackgroundDesktop from "../images/about-background-desktop.jpg";
import facebookSocialIcon from "../images/facebook-social-icon.svg";
import instagramSocialIcon from "../images/instagram-social-icon.svg";

import { breakpoint } from "../utilities/breakpoints";

const AboutSection = styled.section`
  background-image: url(${aboutBackgroundMobile});
  background-size: cover;
  height: 650px;

  @media ${breakpoint.medium} {
    height: 790px;
    background-image: url(${aboutBackgroundDesktop});
    display: flex;
    flex-direction: row-reverse;
  }
}
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 100%;
  margin: auto;

  @media ${breakpoint.medium} {
    align-items: flex-end;
    text-align: right;
    width: 33%;
    margin: 0 10% 0 0;
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

function About() {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutHeading>ELECTRIC DELUXE RECORDERS</AboutHeading>
        <AboutSubHeading>
          is the personal studio of Grammy Award-winning guitarist, producer,
          and songwriter
        </AboutSubHeading>
        <AboutHeading>ADRIAN QUESADA.</AboutHeading>
        <AboutParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis.
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
