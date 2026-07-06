"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/site";
import { Icon } from "./Icons";

export function ProductShowcase() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  const total = useMemo(
    () => Object.values(cart).reduce((sum, count) => sum + count, 0),
    [cart]
  );

  function addToCart(name: string) {
    setCart((current) => ({
      ...current,
      [name]: (current[name] ?? 0) + 1
    }));
    setLastAdded(name);
    window.setTimeout(() => setLastAdded(null), 1100);
  }

  return (
    <div className="mt-12">
      <div className="mb-6 flex flex-col gap-4 rounded-[1.6rem] border border-white/80 bg-white/65 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c86e3f]">
            ваша корзина
          </p>
          <p className="mt-1 text-sm text-[#68604f]">
            Добавляйте понравившиеся товары и смотрите, сколько позиций уже выбрано.
          </p>
        </div>
        <div
          className={[
            "inline-flex items-center gap-3 rounded-full bg-[#2f4b34] px-5 py-3 font-black text-white shadow-[0_16px_32px_rgba(47,75,52,0.2)]",
            total > 0 ? "cart-pop" : ""
          ].join(" ")}
          key={total}
          aria-live="polite"
        >
          <Icon name="bag" className="h-5 w-5" />
          {total === 0 ? "Корзина пуста" : `В корзине: ${total}`}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => {
          const added = lastAdded === product.name;
          const count = cart[product.name] ?? 0;

          return (
            <article
              key={product.name}
              className="group soft-card overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(66,49,25,0.14)]"
            >
              <div
                className={`relative h-44 overflow-hidden rounded-[1.45rem] bg-gradient-to-br ${product.accent}`}
              >
                <div className="absolute inset-0 pet-pattern opacity-50" />
                <div className="absolute left-5 top-5 rounded-full bg-white/78 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#2f4b34] shadow-sm">
                  {product.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-[1.2rem] border border-white/75 bg-white/70 p-4 backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a765d]">
                    {product.type}
                  </p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.03em] text-[#2f4b34]">
                    {product.name}
                  </h3>
                </div>
                <div className="absolute right-5 top-1/2 grid h-16 w-16 -translate-y-1/2 place-items-center rounded-[1.4rem] bg-white/68 text-[#c86e3f] shadow-[0_18px_34px_rgba(75,52,29,0.13)] transition duration-300 group-hover:rotate-6 group-hover:scale-105">
                  <Icon name="paw" className="h-8 w-8" />
                </div>
              </div>

              <div className="px-2 pt-5">
                <p className="min-h-20 text-sm leading-7 text-[#68604f]">
                  {product.description}
                </p>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-2xl font-black tracking-[-0.04em] text-[#2f4b34]">
                      {product.price}
                    </p>
                    {product.oldPrice ? (
                      <p className="text-sm font-bold text-[#a59a82] line-through">
                        {product.oldPrice}
                      </p>
                    ) : (
                      <p className="text-sm font-bold text-[#a59a82]">в наличии</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart(product.name)}
                    className={[
                      "focus-ring rounded-full px-4 py-3 text-sm font-black shadow-sm transition duration-300",
                      added
                        ? "bg-[#2f4b34] text-white"
                        : "bg-[#c86e3f] text-white hover:-translate-y-0.5 hover:bg-[#9e4d2f]"
                    ].join(" ")}
                    aria-label={`Добавить ${product.name} в корзину`}
                  >
                    {added ? "Добавлено" : count > 0 ? `Еще + (${count})` : "В корзину"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
