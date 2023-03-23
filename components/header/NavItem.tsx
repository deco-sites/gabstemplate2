import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image } = item;

  return (
    <li class="group flex items-center mx-9 relative h-full">
      <a href={href} class="px-1.5">
        <Text
          class=""
          variant="menu"
        >
          {label}
        </Text>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`absolute invisible hover:visible group-hover:visible bg-footer z-50 flex items-start justify-center gap-6 border-default w-auto top-[90%] shadow-md left-[50%] translate-x-[-50%]`}
          >
            {image?.src && (
              <Image
                class=""
                src={image.src}
                alt={image.alt}
                width={300}
                height={332}
                loading="lazy"
              />
            )}
            <ul class="flex flex-col items-start justify-center gap-0 w-max py-2.5 px-7">
              {children.map((node) => (
                <li class="py-1 px-5">
                  <a class="text-white" href={node.href}>
                    <Text variant="submenu" tone="submenu">{node.label}</Text>
                  </a>

                  <ul class="flex flex-col gap-1">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="text-white" href={leaf.href}>
                          <Text variant="submenu" tone="submenu">{leaf.label}</Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
