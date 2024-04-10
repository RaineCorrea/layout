import { isMobile } from "react-device-detect";
import { FooterMenuMobile } from "./FooterMenuMobile/FooterMenuMobile";
import { FooterMenuDesktop } from "./FooterMenuDesktop/FooterMenuDesktop";

import { footerMenuMobile } from "../../mocks/footerMenuMobile";
import { footerMenuDesktop } from "../../mocks/footerMenuDesktop";

export function FooterMenu() {
  return (
    <>
      {isMobile ? (
        <FooterMenuMobile props={footerMenuMobile} />
      ) : (
        <FooterMenuDesktop props={footerMenuDesktop} />
      )}
    </>
  );
}
