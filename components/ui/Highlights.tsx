import Image from "deco-sites/std/components/Image.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import {
  Picture,
  Source,
} from "https://denopkg.com/deco-sites/std@0.2.1/components/Picture.tsx";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  /**
   * @description Image height, take care with high images because that impact in performance
   */
  width?: number;
  /**
   * @description Image height, take care with high images because that impact in performance
   */
  height?: number;
  text: {
    title: string;
    label: string;
  };
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <Container class="grid grid-cols-1 grid-rows-[48px_1fr] py-10">
      <h2 class="text-center">
        <Text variant="heading-2">{title}</Text>
      </h2>

      <Slider
        class="gap-6"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {highlights.map((
          { href, src, alt, width, height, text: { title, label } },
        ) => (
          <a
            href={href}
            class="flex flex-col gap-4 items-center min-w-[190px]"
          >
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={src}
                width={width ? width : 250}
                height={height ? height : 250}
              />
              <Source
                media="(min-width: 768px)"
                src={src}
                width={width ? width : 250}
                height={height ? height : 250}
              />
              <img
                sizes="(max-width: 640px) 100vw, 30vw"
                src={src}
                alt={alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
            <Text variant="heading-3-bold" class="mt-6 text-center">{title}</Text>
            <Text variant="featured-text" class="mt-2.5 text-center">{label}</Text>
          </a>
        ))}
      </Slider>
    </Container>
  );
}

export default Highlights;
