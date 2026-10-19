export type Product = {
  id: string;
  image: string;
  alt: string;
  origin: string;
  name: string;
  description: string;
  price: string;
};

export const products: Product[] = [
  {
    id: "irgacheffe",
    image: "/images/p-ethiopia.svg",
    alt: "Пачка кофе Эфиопия Иргачеффе",
    origin: "Эфиопия",
    name: "Иргачеффе",
    description: "Цветочный, бергамот. Светлая обжарка, 250 г",
    price: "32 BYN",
  },
  {
    id: "huila",
    image: "/images/p-colombia.svg",
    alt: "Пачка кофе Колумбия Уила",
    origin: "Колумбия",
    name: "Уила",
    description: "Карамель, красное яблоко. 250 г",
    price: "29 BYN",
  },
  {
    id: "cerrado",
    image: "/images/p-brazil.svg",
    alt: "Пачка кофе Бразилия Серрадо",
    origin: "Бразилия",
    name: "Серрадо",
    description: "Орех, шоколад. Под эспрессо, 250 г",
    price: "26 BYN",
  },
  {
    id: "drip",
    image: "/images/p-drip.svg",
    alt: "Дрип-пакеты, ассорти",
    origin: "Дрип-пакеты",
    name: "Ассорти",
    description: "10 штук. Для офиса и поездок",
    price: "18 BYN",
  },
];
