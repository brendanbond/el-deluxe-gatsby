import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { breakpoint } from "../utilities/breakpoints";
import ContactMobileBackground from "../images/contact-mobile-background.jpg";
import ContactDesktopBackground from "../images/contact-desktop-background.jpg";

const ContactSection = styled.section`
  background-image: url(${ContactMobileBackground});
  background-size: cover;
  overflow: auto;

  @media ${breakpoint.medium} {
    background-image: none;
    display: flex;
    flex-direction: row;
  }
`;

const ContactImageContainer = styled.div`
  display: none;

  @media ${breakpoint.medium} {
    display: inherit;
    width: 50%;
    background-image: url(${ContactDesktopBackground});
    background-size: cover;
  }
`;

const ContactFormContainer = styled.div`
  text-align: center;
  color: white;
  width: 80%;
  font-size: 14px;
  white-space: pre-wrap;
  margin: 0 auto;

  @media ${breakpoint.medium} {
    width: 50%;
    padding: 0 20px 0 20px;
    color: black;
    background-color: white;
    overflow: hidden;
    text-align: left;
  }
`;

function Contact() {

  return (
    <ContactSection>
      <ContactImageContainer />
      <ContactFormContainer>
      </ContactFormContainer>
    </ContactSection>
  );
}

export default Contact;
