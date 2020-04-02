import React from "react";
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
  font-size: 14pt;
  z-index: 100;
  background-color: rgb(0, 0, 0, 0.8);
`;

const LeftColumn = styled.div`
  width: 25%;
  display: flex;
`;

const RightColumn = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-end;
`;

const DesktopNavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const NavItem = styled(Link)`
  cursor: pointer;
  margin: 0 15px;
`;

const DesktopCartContainer = styled.div`
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

function DesktopNav({ cartImage, logoImage }) {
  const { getCartQuantity, toggleCart } = useCartContext();

  return (
    <NavContainer>
      <LeftColumn>
        <NavItem
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
        >
          <img src={logoImage} width="100px" alt="Electric Deluxe logo"></img>
        </NavItem>
      </LeftColumn>
      <RightColumn>
        <DesktopNavItemsContainer>
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
          <DesktopCartContainer onClick={() => toggleCart()}>
            <CartIcon src={cartImage} active={getCartQuantity() > 0} />
            <CartIndicator active={getCartQuantity() > 0}>
              {getCartQuantity()}
            </CartIndicator>
          </DesktopCartContainer>
        </DesktopNavItemsContainer>
      </RightColumn>
    </NavContainer>
  );
}

export default DesktopNav;
