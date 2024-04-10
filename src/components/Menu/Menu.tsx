import { isMobile } from "react-device-detect";

import { MenuDesktop } from "./MenuDesktop/MenuDesktop";
import { menuItemsDesktop } from "../../mocks/menuItemsDesktop";

export function Menu() {
  return (
    <>{isMobile ? "" : <MenuDesktop menuItemsDesktop={menuItemsDesktop} />}</>
  );
}
