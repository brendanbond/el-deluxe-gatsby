import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import { useCartContext } from "../hooks/useCartContext";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 75px;
  padding: 0 10% 0 10%;
  margin: 0 auto;
  top: 0px;
  position: sticky;
  font-family: "have_nothing_to_do_withRg";
  font-size: 10pt;
  z-index: 100;
  background-color: rgb(0, 0, 0, 0.8);
`;

const LeftColumn = styled.div`
  width: 33.3%;
  display: flex;
`;

const CenterColumn = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: center;
`;

const RightColumn = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: end;
`;

const MobileNavButton = styled.button`
  height: 33px;
  background-color: transparent;
  border: 4px solid white;
  border-radius: 4px;
  color: white;
  font-family: inherit;
  cursor: pointer;
`;

const MobileNavItemsContainer = styled.div`
  display: flex;
  position: fixed;
  overflow: hidden;
  max-height: ${props => (props.show ? "250px" : "0")};
  transition: max-height 0.4s ease-out;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background-color: rgb(0, 0, 0, 0.8);
  width: 100%;
  padding-left: 10%;
  font-family: "have_nothing_to_do_withRg";
  font-size: 14pt;
  z-index: 100;
`;

const NavItem = styled(Link)`
  cursor: pointer;
  margin: 2px 0;
`;

const MobileCartContainer = styled.div`
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
  text-align: center;
  font-size: 9pt;
  font-weight: 400;
`;

const CartIcon = styled.img`
  width: 40px;
  height: 33.5px;
`;

function MobileNav({ cartImage, logoImage }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { getCartQuantity, toggleCart } = useCartContext();
  return (
    <>
      <NavContainer>
        <LeftColumn>
          <MobileNavButton onClick={() => setShowMobileNav(!showMobileNav)}>
            Menu
          </MobileNavButton>
        </LeftColumn>
        <CenterColumn>
          <img src={logoImage} width="100px" alt="Electric Deluxe Logo" />
        </CenterColumn>
        <RightColumn>
          <MobileCartContainer onClick={() => toggleCart()}>
            <CartIcon src={cartImage} active={getCartQuantity() > 0} />
            <CartIndicator active={getCartQuantity() > 0}>
              {getCartQuantity()}
            </CartIndicator>
          </MobileCartContainer>
        </RightColumn>
      </NavContainer>
      <MobileNavItemsContainer show={showMobileNav}>
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
          Selected Discography
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
      </MobileNavItemsContainer>
    </>
  );
}

export default MobileNav;
