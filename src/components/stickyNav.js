import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import Brand from "./brand";
import MobileNavButton from "./mobileNavButton";
import CollapsibleNavMenu from "./collapsibleNavMenu";
import { breakpoint } from "../utilities/breakpoints";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0 10% 0 10%;
  top: 0px;
  position: sticky;
  font-family: "have_nothing_to_do_withRg";
  font-size: 1rem;
  z-index: 100;
  background-color: rgb(0, 0, 0, 0.7);
`;

const NavLinks = styled.div`
  display: none;

  @media ${breakpoint.medium} {
    display: inherit;
    text-align: center;
    & a {
      opacity: 0.8;
      margin: auto 0 auto 15px;
      border: 1px solid transparent;
      transition: all 300ms ease-out 0s;
      text-decoration: none;
      cursor: pointer;
      color: #ffffff;

      &:hover {
        opacity: 1;
        border-bottom: 1px solid white;
      }
    }
  }
`;

const CollapsibleNavMenuContainer = styled.div`
  @media ${breakpoint.medium} {
    display: none;
  }
`;

const MobileMenuButton = styled(MobileNavButton)`
  display: block;

  @media ${breakpoint.medium} {
    display: none;
  }
`;

function StickyNav() {
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <NavContainer>
      <CollapsibleNavMenuContainer>
        <MobileMenuButton onClick={() => setMobileShow(!mobileShow)} />
        <CollapsibleNavMenu show={mobileShow} />
      </CollapsibleNavMenuContainer>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-75}
        duration={500}
      >
        <Brand />
      </Link>
      <NavLinks>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="discography"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          Selected Discography
        </Link>
        <Link
          activeClass="active"
          to="gear"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          Gear
        </Link>
        {/* <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          The Studio
        </Link> */}
        <a
          href="https://www.hellomerch.com/collections/adrian-quesada"
          target="_blank"
          rel="noreferrer"
        >
          Merch
        </a>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          Get In Touch
        </Link>
      </NavLinks>
    </NavContainer>
  );
}

export default StickyNav;
