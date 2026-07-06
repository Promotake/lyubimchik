import type { SVGProps } from "react";

export type IconName =
  | "bag"
  | "ball"
  | "bowl"
  | "check"
  | "chevron"
  | "clock"
  | "home"
  | "heart"
  | "map"
  | "menu"
  | "paw"
  | "phone"
  | "shield"
  | "sparkle"
  | "truck"
  | "x";

type IconProps = SVGProps<SVGSVGElement>;

const base = "h-5 w-5";

export function Icon({ name, className = base, ...props }: IconProps & { name: IconName }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    ...props
  };

  switch (name) {
    case "bag":
      return (
        <svg {...common}>
          <path d="M6.8 8.5h10.4l.8 11H6l.8-11Z" />
          <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
        </svg>
      );
    case "ball":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.2" />
          <path d="M4.5 11.2c3.6.4 7.8-1 10.8-5" />
          <path d="M8.7 19.1c-.2-3.6 1-7.1 4.2-10.5" />
          <path d="M15.2 18.9c.2-2.9 1.6-5.5 4.1-7.9" />
        </svg>
      );
    case "bowl":
      return (
        <svg {...common}>
          <path d="M4.8 10.4h14.4l-1.1 4.2A5.2 5.2 0 0 1 13 18.5h-2a5.2 5.2 0 0 1-5.1-3.9l-1.1-4.2Z" />
          <path d="M7 10.4c.3-2 2.3-3.5 5-3.5s4.7 1.5 5 3.5" />
          <path d="M9.3 14h5.4" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12.3 4.1 4.1L19 6.9" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7.7v4.8l3.2 1.9" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M4.5 11.2 12 5l7.5 6.2" />
          <path d="M6.8 10.3v8.2h10.4v-8.2" />
          <path d="M10 18.5v-5h4v5" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M20 8.8c0 5-8 9.4-8 9.4S4 13.8 4 8.8A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 1.8Z" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case "paw":
      return (
        <svg {...common}>
          <path d="M8.2 12.4c1.7-1.4 5.9-1.4 7.6 0 2.4 2 1.1 5.4-1.8 4.7-1.3-.3-2.7-.3-4 0-2.9.7-4.2-2.7-1.8-4.7Z" />
          <path d="M6.8 9.6c-.9.2-1.8-.7-2-2s.3-2.5 1.2-2.7 1.8.7 2 2-.3 2.5-1.2 2.7Z" />
          <path d="M11 7.7c-1 .1-1.9-.9-2-2.2S9.5 3 10.5 3s1.9.9 2 2.2-.5 2.4-1.5 2.5Z" />
          <path d="M17.2 9.6c.9.2 1.8-.7 2-2s-.3-2.5-1.2-2.7-1.8.7-2 2 .3 2.5 1.2 2.7Z" />
          <path d="M13 7.7c1 .1 1.9-.9 2-2.2S14.5 3 13.5 3s-1.9.9-2 2.2.5 2.4 1.5 2.5Z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M8 5.5 6.4 7.1c-.6.6-.7 1.4-.3 2.1a24.3 24.3 0 0 0 8.7 8.7c.7.4 1.5.3 2.1-.3l1.6-1.6a1.3 1.3 0 0 0 0-1.8l-2-2a1.3 1.3 0 0 0-1.8 0l-.8.8a15.7 15.7 0 0 1-2.9-2.9l.8-.8a1.3 1.3 0 0 0 0-1.8l-2-2a1.3 1.3 0 0 0-1.8 0Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 4.2 18.2 7v5.1c0 4.1-2.6 6.7-6.2 7.9-3.6-1.2-6.2-3.8-6.2-7.9V7L12 4.2Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M12 3.8 13.6 9l5.2 1.6-5.2 1.6L12 17.4l-1.6-5.2-5.2-1.6L10.4 9 12 3.8Z" />
          <path d="M18 15.5 18.8 18l2.4.8-2.4.8L18 22l-.8-2.4-2.4-.8 2.4-.8.8-2.5Z" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M4 6.5h9.6v8.3H4z" />
          <path d="M13.6 9h3.2l3.2 3.2v2.6h-6.4z" />
          <circle cx="7.2" cy="17.2" r="1.8" />
          <circle cx="16.8" cy="17.2" r="1.8" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </svg>
      );
  }
}
