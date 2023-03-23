import Container from "$store/components/ui/Container.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image height, take care with high images because that impact in performance
   */
  width?: number;
  /**
   * @description Image height, take care with high images because that impact in performance
   */
  height?: number;
  /**
   * @description Hover animation
   */
  animation?: boolean;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
  text?: string;
  callToAction?: {
    text?: string;
    url?: string;
  };
}

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine: {
    mobile?: number;
    desktop?: number;
  };
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    mobile?: number;
    desktop?: number;
  };
  banners: Banner[];
}

export default function BannerGridText({
  title,
  itemsPerLine,
  borderRadius,
  banners = [],
}: Props) {
  return (
    <Container>
      <section class="w-full px-4 md:px-0 mx-auto my-16">
        {title &&
          (
            <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
              <h2 class={"text-lg leading-5 font-semibold uppercase "}>
                {title}
              </h2>

              <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
            </div>
          )}
        <div
          class={`grid gap-4 md:gap-6 grid-cols-${
            itemsPerLine && itemsPerLine.mobile ? itemsPerLine.mobile : "2"
          } md:grid-cols-${
            itemsPerLine && itemsPerLine.desktop
              ? itemsPerLine.desktop
              : banners.length
          }`}
        >
          {banners.map((
            {
              href,
              srcMobile,
              srcDesktop,
              width,
              height,
              alt,
              text,
              callToAction,
              animation,
            },
          ) => (
            <div className="relative group overflow-hidden ">
              <a
                href={href}
                class={`overflow-hidden ${
                  borderRadius?.mobile && `rounded-[${borderRadius.mobile}px]`
                } ${
                  borderRadius?.desktop
                    ? `sm:rounded-[${borderRadius.desktop}px]`
                    : `sm:rounded-none`
                }`}
              >
                <Picture>
                  <Source
                    media="(max-width: 767px)"
                    src={srcMobile}
                    width={width ? width * 0.4 : 100}
                    height={height ? height * 0.4 : 100}
                  />
                  <Source
                    media="(min-width: 768px)"
                    src={srcDesktop ? srcDesktop : srcMobile}
                    width={width ? width : 250}
                    height={height ? height : 250}
                  />
                  <img
                    class={`w-full ${
                      animation &&
                      `group-hover:scale-blur-image duration-[400ms] ease`
                    } `}
                    sizes="(max-width: 640px) 100vw, 30vw"
                    src={srcMobile}
                    alt={alt}
                    decoding="async"
                    loading="lazy"
                  />
                </Picture>

                <div class="absolute top-[50%] left-[50%] translate-[-50%] flex flex-col items-center justify-center p-[10%] w-full">
                  {text && (
                    <p class="text-xl text-black w-full">
                      {text}
                    </p>
                  )}
                  {callToAction?.text && (
                    <a
                      class="py-3 px-7 border-1 border-solid border-[#8A4F7D] mt-3 uppercase text-[16px] text-[#8a4f7d] font-heading-1 hover:bg-[#8A4F7D] hover:text-white"
                      href={callToAction?.url}
                    >
                      {callToAction?.text}
                    </a>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
