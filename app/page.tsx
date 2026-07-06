import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { ProductShowcase } from "@/components/ProductShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { benefits, categories, contactCards, reviews } from "@/data/site";

const toneClasses = {
  sage: "bg-[#edf4e7] text-[#2f4b34]",
  terracotta: "bg-[#fff0e6] text-[#c86e3f]",
  cream: "bg-[#fff7df] text-[#92713f]"
};

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden">
      <Header />

      <section className="relative pt-32 sm:pt-36 lg:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[46rem] bg-[radial-gradient(circle_at_70%_20%,rgba(200,110,63,0.18),transparent_26rem)]" />
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/72 px-4 py-2 text-sm font-bold text-[#5f7f52] shadow-sm backdrop-blur">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#edf4e7]">
                <Icon name="heart" className="h-4 w-4" />
              </span>
              Теплый магазин для любимых хвостиков
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.07em] text-[#2f4b34] sm:text-6xl lg:text-7xl">
              Любимчик — все для спокойной, сытой и радостной жизни питомца
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#68604f] sm:text-xl">
              Подберем корм, игрушки, уход и уютные товары без суеты. Светлый
              зоомагазин рядом с домом, где к каждому питомцу относятся как к
              своему.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#c86e3f] px-7 py-4 text-sm font-black text-white shadow-[0_20px_38px_rgba(200,110,63,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9e4d2f]"
              >
                Смотреть товары
                <Icon name="chevron" className="h-4 w-4" />
              </a>
              <a
                href="#contacts"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-[#eadcc2] bg-white/72 px-7 py-4 text-sm font-black text-[#2f4b34] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Получить консультацию
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["1200+", "товаров"],
                ["15 мин", "ответ"],
                ["4.9/5", "оценка"]
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.4rem] border border-white/75 bg-white/62 p-4 text-center shadow-sm backdrop-blur"
                >
                  <p className="text-2xl font-black tracking-[-0.04em] text-[#2f4b34] sm:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8b8069]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#c86e3f]/15 blur-2xl" />
            <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-[#5f7f52]/16 blur-2xl" />
            <div className="soft-card floating relative overflow-hidden p-5 sm:p-7">
              <div className="pet-pattern absolute inset-0 opacity-70" />
              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#fff5dc] via-[#f6edda] to-[#e8f0df] p-5 sm:p-7">
                <div className="rounded-[1.8rem] border border-white/75 bg-white/64 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c86e3f]">
                        набор недели
                      </p>
                      <h2 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#2f4b34]">
                        Стартовый уют
                      </h2>
                    </div>
                    <div className="grid h-16 w-16 place-items-center rounded-[1.4rem] bg-[#2f4b34] text-[#fffaf0] shadow-[0_18px_36px_rgba(47,75,52,0.26)]">
                      <Icon name="paw" className="h-9 w-9" />
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {["Корм", "Игрушка", "Лежанка", "Уход"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-white/70 p-3"
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#edf4e7] text-[#2f4b34]">
                          <Icon name="check" className="h-5 w-5" />
                        </span>
                        <span className="font-extrabold text-[#4b4e3d]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-[1.5rem] bg-[#2f4b34] p-5 text-white">
                    <p className="text-sm font-bold text-white/75">
                      Соберите корзину под питомца
                    </p>
                    <p className="mt-2 text-2xl font-black tracking-[-0.04em]">
                      Консультация бесплатно
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="ассортимент"
            title="Категории, в которых легко ориентироваться"
            description="Разделы собраны по реальным задачам владельца: накормить, занять, ухаживать и создать питомцу спокойное место."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group soft-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(66,49,25,0.13)]"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${toneClasses[category.tone]} transition duration-300 group-hover:scale-105 group-hover:rotate-3`}
                >
                  <Icon name={category.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-black tracking-[-0.03em] text-[#2f4b34]">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#68604f]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="section-shell">
          <div className="grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[2rem] border border-[#eadcc2]/80 bg-[#fff7e8]/72 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/82"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#2f4b34] text-white shadow-[0_14px_28px_rgba(47,75,52,0.18)]">
                    <Icon name={benefit.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-[-0.03em] text-[#2f4b34]">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#68604f]">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="популярное"
            title="Товары, которые чаще всего берут для любимчиков"
            description="Подборка популярных товаров с актуальными ценами, понятными описаниями и быстрым добавлением в корзину."
          />
          <ProductShowcase />
        </div>
      </section>

      <section id="about" className="py-20 sm:py-24">
        <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="soft-card relative overflow-hidden p-6 sm:p-8">
            <div className="pet-pattern absolute inset-0 opacity-60" />
            <div className="relative rounded-[1.7rem] bg-[#2f4b34] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c19b]">
                о магазине
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Мы не просто продаем товары — помогаем заботиться
              </h2>
              <p className="mt-5 leading-8 text-white/78">
                «Любимчик» создан как спокойное место для владельцев животных:
                без давящего выбора, без случайных рекомендаций и без ощущения
                рынка. Только понятные товары, честные советы и теплое отношение.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Подбор корма по возрасту и особенностям питомца",
              "Вежливые консультации в магазине и по телефону",
              "Аккуратная выкладка и понятная навигация по полкам",
              "Регулярные акции для постоянных покупателей"
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[1.5rem] border border-white/75 bg-white/68 p-5 shadow-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#edf4e7] text-[#2f4b34]">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <p className="font-bold leading-7 text-[#4b4e3d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeading
            eyebrow="доверие"
            title="Отзывы покупателей"
            description="Покупатели возвращаются за понятными советами, спокойным сервисом и товарами, которые действительно подходят их питомцам."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="soft-card p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 flex gap-1 text-[#c86e3f]" aria-label="5 из 5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} name="sparkle" className="h-4 w-4" />
                  ))}
                </div>
                <p className="leading-8 text-[#57513f]">“{review.text}”</p>
                <div className="mt-6 border-t border-[#eadcc2] pt-5">
                  <p className="font-black tracking-[-0.02em] text-[#2f4b34]">
                    {review.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#8b8069]">
                    {review.meta}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="контакты"
              title="Напишите — поможем собрать корзину"
              description="Оставьте контакты — консультант поможет подобрать корм, уход или собрать заказ для вашего питомца."
            />

            <div className="mt-8 grid gap-4">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-white/80 bg-white/68 p-5 shadow-sm"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff0e6] text-[#c86e3f]">
                    <Icon name={card.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8b8069]">
                      {card.title}
                    </p>
                    <p className="mt-1 font-black text-[#2f4b34]">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-[#eadcc2]/80 bg-[#2f4b34] py-10 text-white">
        <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/12 text-[#fff7df]">
              <Icon name="paw" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-black tracking-[-0.04em]">Любимчик</p>
              <p className="text-sm font-semibold text-white/62">
                Зоомагазин с заботой о каждом питомце
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-bold text-white/72">
            <a className="focus-ring rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#categories">
              Категории
            </a>
            <a className="focus-ring rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#products">
              Товары
            </a>
            <a className="focus-ring rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white" href="#contacts">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
