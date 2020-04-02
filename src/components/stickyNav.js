import React from "react";
import { useMediaQuery } from "react-responsive";

import MobileNav from "./mobileNav";
import DesktopNav from "./desktopNav";
import { breakpoint } from "../utilities/breakpoints";
import Cart from "../images/cart.svg";
import Logo from "../images/logo.png";

function StickyNav() {
  const isDesktop = useMediaQuery({ query: breakpoint.large });

  return isDesktop ? (
    <DesktopNav cartImage={Cart} logoImage={Logo} />
  ) : (
    <MobileNav cartImage={Cart} logoImage={Logo} />
  );
}

export default StickyNav;
