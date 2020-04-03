import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const CollapseContainer = styled.div`
  background: rgb(0, 0, 0, 0.7);
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.div`
  list-style-type: none;

  & li {
    transition: all 300ms linear 0s;
    padding-left: 10%;
  }

  & a {
    font-size: 1rem;
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: white;
      border-bottom: 1px solid white;
    }
  }
`;

function CollapsibleNavMenu({ show }) {
  return show ? (
    <CollapseContainer>
      <NavLinks>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
          <Link
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            The Studio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="store"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Merch
          </Link>
        </li>
        <li>
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
        </li>
      </NavLinks>
    </CollapseContainer>
  ) : null;
}

export default CollapsibleNavMenu;
