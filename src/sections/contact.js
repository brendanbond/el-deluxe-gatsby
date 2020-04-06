import React from "react";
import styled from "styled-components";

import ContactForm from "../components/contactForm";
import { breakpoint } from "../utilities/breakpoints";
import MobileBackground from "../images/contact-mobile-background.jpg";
import DesktopBackground from "../images/contact-desktop-background.jpg";


const ContactSection = styled.section`
  background-image: url(${MobileBackground});
  background-size: cover;
  background-position: center center;
  padding: 30px 0;
  min-height: 500px;

  @media ${breakpoint.medium} {
    background-image: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    min-height: 700px;
  }
`;

const ContactImageContainer = styled.div`
  display: none;

  @media ${breakpoint.medium} {
    display: inherit;
    width: 50%;
    background-image: url(${DesktopBackground});
    background-size: cover;
  }
`;

const ContactFormContainer = styled.div`
  display: block;
  color: white;
  font-size: 14px;
  width: 80%;
  margin: 0 auto;

  @media ${breakpoint.medium} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 0 20px 0 20px;
    color: black;
    background-color: white;
    text-align: left;
  }
`;

const ContactFormHeading = styled.h1`
  font-family: "have_nothing_to_do_withRg";
  font-weight: 800;
  font-style: normal;
  text-align: center;
`;

function Contact({ name }) {
  return (
    <ContactSection name={name}>
      <ContactImageContainer />
      <ContactFormContainer>
        <ContactFormHeading>Get In Touch</ContactFormHeading>
        <ContactForm />
      </ContactFormContainer>
    </ContactSection>
  );
}

export default Contact;
