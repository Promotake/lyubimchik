"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { Icon } from "./Icons";
import { LogoImage } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={[
          "mx-auto max-w-7xl rounded-[1.7rem] border transition-all duration-300",
          scrolled
            ? "border-white/80 bg-[#fffaf0]/88 shadow-[0_18px_45px_rgba(47,75,52,0.12)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        ].join(" ")}
      >
        <nav className="flex items-center justify-between px-4 py-3 sm:px-5">
          <a
            href="#top"
            className="focus-ring group flex items-center gap-3 rounded-2xl"
            onClick={close}
            aria-label="Любимчик — на главную"
          >
            <span className="grid h-16 w-16 shrink-0 place-items-center overflow-visible transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <LogoImage className="h-full w-full object-contain drop-shadow-[0_10px_18px_rgba(47,75,52,0.18)]" />
            </span>
            <span>
              <span className="block text-lg font-black tracking-[-0.04em] text-[#2f4b34]">
                Любимчик
              </span>
              <span className="hidden text-xs font-semibold text-[#8b8069] sm:block">
                зоомагазин рядом
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-[#57513f] transition duration-300 hover:bg-white/80 hover:text-[#2f4b34]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contacts"
              className="focus-ring rounded-full bg-[#c86e3f] px-5 py-3 text-sm font-extrabold text-white shadow-[0_16px_28px_rgba(200,110,63,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9e4d2f]"
            >
              Заказать звонок
            </a>
          </div>

          <button
            type="button"
            className="focus-ring grid h-11 w-11 place-items-center rounded-2xl border border-[#efe2c9] bg-white/75 text-[#2f4b34] shadow-sm transition hover:bg-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </nav>

        <div
          className={[
            "grid overflow-hidden transition-all duration-300 lg:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          ].join(" ")}
        >
          <div className="min-h-0">
            <div className="mx-3 mb-3 rounded-[1.4rem] border border-white/80 bg-white/75 p-2 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="focus-ring flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-[#57513f] transition hover:bg-[#f6edda]"
                >
                  {item.label}
                  <Icon name="chevron" className="h-4 w-4 text-[#c86e3f]" />
                </a>
              ))}
              <a
                href="#contacts"
                onClick={close}
                className="focus-ring mt-2 flex items-center justify-center rounded-2xl bg-[#2f4b34] px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#243b29]"
              >
                Связаться с магазином
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
