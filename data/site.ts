import type { IconName } from "@/components/Icons";

export const navItems = [
  { href: "#categories", label: "Категории" },
  { href: "#products", label: "Товары" },
  { href: "#about", label: "О нас" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" }
];

export const categories: Array<{
  title: string;
  description: string;
  icon: IconName;
  tone: "sage" | "terracotta" | "cream";
}> = [
  {
    title: "Корма и лакомства",
    description: "Сухие, влажные и натуральные рационы для кошек, собак, птиц и грызунов.",
    icon: "bowl",
    tone: "terracotta"
  },
  {
    title: "Игрушки",
    description: "Мячики, канаты, интерактивные игрушки и уютные развлечения на каждый день.",
    icon: "ball",
    tone: "sage"
  },
  {
    title: "Уход и гигиена",
    description: "Шампуни, расчески, когтерезы, пеленки и средства для чистого дома.",
    icon: "sparkle",
    tone: "cream"
  },
  {
    title: "Домики и лежанки",
    description: "Мягкие лежаки, переноски, домики и теплые места для спокойного отдыха.",
    icon: "home",
    tone: "sage"
  }
];

export const benefits: Array<{
  title: string;
  text: string;
  icon: IconName;
}> = [
  {
    title: "Подбор без навязывания",
    text: "Помогаем выбрать корм и аксессуары по возрасту, привычкам и бюджету питомца.",
    icon: "heart"
  },
  {
    title: "Проверенные бренды",
    text: "В ассортименте только понятные составы, надежные поставки и аккуратное хранение.",
    icon: "shield"
  },
  {
    title: "Быстро рядом с домом",
    text: "Можно забрать заказ в магазине или оформить быструю доставку по району.",
    icon: "truck"
  }
];

export const products = [
  {
    name: "Balanced Cat",
    type: "Корм для кошек",
    price: "1 290 ₽",
    oldPrice: "1 490 ₽",
    tag: "Хит",
    description: "Полнорационный корм с индейкой, таурином и мягкой формулой для шерсти.",
    accent: "from-[#e8c19b] to-[#f7e7c9]"
  },
  {
    name: "Happy Walk",
    type: "Шлейка для собак",
    price: "890 ₽",
    oldPrice: "",
    tag: "Новинка",
    description: "Мягкая регулируемая шлейка с надежной застежкой и светоотражающей строчкой.",
    accent: "from-[#9bbd87] to-[#e3efd6]"
  },
  {
    name: "Cozy Nest",
    type: "Лежанка",
    price: "2 190 ₽",
    oldPrice: "2 590 ₽",
    tag: "Тепло",
    description: "Плюшевая лежанка с бортиками для спокойного сна кошек и маленьких собак.",
    accent: "from-[#dca077] to-[#f5dfc6]"
  },
  {
    name: "Play Mouse Set",
    type: "Игрушки",
    price: "390 ₽",
    oldPrice: "",
    tag: "3 шт.",
    description: "Набор легких игрушек с шуршащим наполнителем для активной домашней охоты.",
    accent: "from-[#b7c9a5] to-[#fff1c8]"
  }
];

export const reviews = [
  {
    name: "Анна и кот Марсик",
    text: "Наконец-то нашли корм, который Марсик ест без уговоров. Продавец спокойно объяснил разницу составов и ничего не навязывал.",
    meta: "Покупает корм и наполнитель"
  },
  {
    name: "Игорь, хозяин корги",
    text: "Очень приятный магазин: чисто, светло, товары разложены понятно. Шлейку помогли примерить прямо на месте.",
    meta: "Выбирал амуницию"
  },
  {
    name: "Семья Петровых",
    text: "Заказываем лежанки, лакомства и игрушки. Нравится, что быстро отвечают и советуют по делу.",
    meta: "Постоянные покупатели"
  }
];

export const contactCards: Array<{
  title: string;
  text: string;
  icon: IconName;
}> = [
  {
    title: "Адрес",
    text: "г. Якутск, ул. Дружбы, 15",
    icon: "map"
  },
  {
    title: "Телефон",
    text: "+7 914 000-00-00",
    icon: "phone"
  },
  {
    title: "График",
    text: "Ежедневно 10:00–21:00",
    icon: "clock"
  }
];
