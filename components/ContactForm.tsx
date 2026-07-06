"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icons";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="soft-card p-5 sm:p-7"
      aria-label="Форма обратной связи"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[#4f523f]">Имя</span>
          <input
            required
            name="name"
            type="text"
            placeholder="Например, Айталина"
            className="focus-ring w-full rounded-2xl border border-[#eadcc2] bg-white/75 px-4 py-3 text-[#2d3027] outline-none transition placeholder:text-[#b0a48c] hover:border-[#d8c39f]"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[#4f523f]">Телефон</span>
          <input
            required
            name="phone"
            type="tel"
            placeholder="+7 914 000-00-00"
            className="focus-ring w-full rounded-2xl border border-[#eadcc2] bg-white/75 px-4 py-3 text-[#2d3027] outline-none transition placeholder:text-[#b0a48c] hover:border-[#d8c39f]"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold text-[#4f523f]">
          Что нужно питомцу?
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="Подобрать корм, уточнить наличие, заказать доставку..."
          className="focus-ring w-full resize-none rounded-2xl border border-[#eadcc2] bg-white/75 px-4 py-3 text-[#2d3027] outline-none transition placeholder:text-[#b0a48c] hover:border-[#d8c39f]"
        />
      </label>

      <button
        type="submit"
        className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f4b34] px-6 py-4 text-sm font-black text-white shadow-[0_18px_36px_rgba(47,75,52,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#243b29] sm:w-auto"
      >
        Отправить заявку
        <Icon name="chevron" className="h-4 w-4" />
      </button>

      {sent ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#b9d6a7] bg-[#f1f8ec] p-4 text-sm font-semibold text-[#2f4b34]">
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
          Заявка сохранена на странице. Backend не подключен, поэтому отправка имитируется.
        </div>
      ) : null}
    </form>
  );
}
