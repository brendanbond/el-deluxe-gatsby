import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

import { breakpoint } from "../utilities/breakpoints";

const MobileBackgroundImage = styled(BackgroundImage)`
  @media ${breakpoint.medium} {
    display: none;
  }
`;

const DesktopBackgroundImage = styled(BackgroundImage)`
  display: none;

  @media ${breakpoint.medium} {
    display: initial;
  }
`;

export { MobileBackgroundImage, DesktopBackgroundImage };
