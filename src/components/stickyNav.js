import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

import { useCartContext } from "../hooks/useCartContext";
import { breakpoint } from "../utilities/breakpoints";
import Logo from "../images/logo.png";
import Cart from "../images/cart.svg";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 75px;
  padding: 0 10% 0 10%;
  margin: 0 auto;
  top: 0px;
  position: sticky;
  font-family: "have_nothing_to_do_withRg";
  font-size: 14pt;
  z-index: 100;
  background-color: rgb(0, 0, 0, 0.8);
`;

const LeftColumn = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img``;

const RightColumn = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

// TODO: Get active link to work (react-scroll)
const NavItem = styled(Link)`
  cursor: pointer;
`;

const CartContainer = styled.div`
  cursor: pointer;
  position: relative;
`;

const CartIndicator = styled.div`
  display: ${props => (props.active ? "initial" : "none")};
  position: absolute;
  right: -10px;
  top: 0px;
  width: 13px;
  height: 13px;
  border-radius: 13px;
  background-color: red;
`;

const CartIcon = styled.div`
  width: 40px;
  height: 33.5px;
  mask: url(${Cart});
  mask-size: cover;
  background-color: ${props => (props.active ? "red" : "white")};
`;

function StickyNav() {
  const isDesktop = useMediaQuery({ query: breakpoint.small });
  const { numberOfItems, toggleCart } = useCartContext();

  return (
    <NavContainer>
      {isDesktop ? (
        <>
          <LeftColumn>
            <LogoImage src={Logo} width="100px" alt="Electric Deluxe Logo" />
          </LeftColumn>
          <RightColumn>
            <NavItem
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              About
            </NavItem>
            <NavItem
              activeClass="active"
              to="discography"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Selected
              <br />
              Discography
            </NavItem>
            <NavItem
              activeClass="active"
              to="gear"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Gear
            </NavItem>
            <NavItem
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              The Studio
            </NavItem>
            <NavItem
              activeClass="active"
              to="store"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Merch
            </NavItem>
            <NavItem
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Get In Touch
            </NavItem>
            <CartContainer onClick={() => toggleCart()}>
              <CartIcon src={Cart} active={numberOfItems > 0} />
              <CartIndicator active={numberOfItems > 0}>
                numberOfItems
              </CartIndicator>
            </CartContainer>
          </RightColumn>
        </>
      ) : (
        <div></div>
      )}
    </NavContainer>
  );
}

export default StickyNav;
