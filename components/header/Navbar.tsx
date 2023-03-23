import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";

function Navbar({ itemsLeft, itemsRight, searchbar }: {
  itemsLeft: INavItem[];
  itemsRight: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2`}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={126} height={16} />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center w-full h-[72px] container bg-transparent">
        <div class="w-[20%] block">
        </div>

        <div class="w-[60%] flex justify-center items-center h-full">
          <div class="flex-auto flex justify-center h-full">
            {itemsLeft.map((item) => <NavItem item={item} />)}
          </div>
          <div class="flex-none">
            <a
              href="/"
              aria-label="Store logo"
              class="block"
            >
              <Icon id="Logo" width={180} height={60} />
            </a>
          </div>
          <div class="flex-auto flex justify-center">
            {itemsRight.map((item) => <NavItem item={item} />)}
          </div>
        </div>
        <div class="w-[20%] flex items-center justify-end gap-2">
          <HeaderButton variant="search" />
          <HeaderSearchMenu searchbar={searchbar} />
          <Button
            as="a"
            variant="none"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </Button>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
