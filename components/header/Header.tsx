import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items at Left Side
   * @description Navigation items used both on mobile and desktop menus
   */
  navItemsLeft?: NavItem[];

  /**
   * @title Navigation items at Right Side
   * @description Navigation items used both on mobile and desktop menus
   */
  navItemsRight?: NavItem[];
  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;

  /**
   * @description vtex config used for search autocompletion;
   */
  configVTEX?: LoaderReturnType<ClientConfigVTEX>;
}

function Header(
  {
    alerts,
    searchbar: _searchbar,
    products,
    navItemsLeft = [],
    navItemsRight =[],
    suggestions,
    configVTEX,
  }: Props,
) {
  const searchbar = { ..._searchbar, products, suggestions, configVTEX };
  return (
    <header>
      <div class="bg-transparent fixed w-full z-50">
        <Alert alerts={alerts} />
        <Navbar itemsLeft={navItemsLeft} itemsRight={navItemsRight} searchbar={searchbar} />
      </div>

      <Modals
        menu={{ items: [...navItemsLeft, ...navItemsRight] }}
        searchbar={searchbar}
      />
    </header>
  );
}

export default Header;
