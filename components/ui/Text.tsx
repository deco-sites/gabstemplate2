import { JSX } from "preact";
import { forwardRef } from "preact/compat";

type Props = JSX.IntrinsicElements["span"] & {
  tone?:
    | "default"
    | "default-inverse"
    | "subdued"
    | "subdued-inverse"
    | "price"
    | "section-title"
    | "positive"
    | "critical"
    | "submenu";
  variant?:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-3-bold"
    | "featured-text"
    | "menu"
    | "submenu"
    | "button"
    | "body"
    | "caption"
    | "list-price";
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { tone = "default", variant = "body", class: _class = "", ...props },
  ref,
) => {
  return (
    <span
      {...props}
      class={`${variant && `font-${variant} text-${variant}`} ${tone && `text-${tone}`} ${_class}`}
      ref={ref}
    />
  );
});

export default Text;
