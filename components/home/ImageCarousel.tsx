"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Burger from "@/public/burger.jpg";
import Curry from "@/public/curry.jpg";
import Dumplings from "@/public/dumplings.jpg";
import Macncheese from "@/public/macncheese.jpg";
import Pizza from "@/public/pizza.jpg";
import Schnitzel from "@/public/schnitzel.jpg";
import TomatoSalad from "@/public/tomato-salad.jpg";

export default function ImageCarousel() {
  const [img, setImg] = useState(0);
  const images = [
    {
      image: Burger,
      alt: "Burger",
    },
    {
      image: Curry,
      alt: "Curry",
    },
    {
      image: Dumplings,
      alt: "Dumplings",
    },
    {
      image: Macncheese,
      alt: "Macncheese",
    },
    {
      image: Pizza,
      alt: "Pizza",
    },
    {
      image: Schnitzel,
      alt: "Schnitzel",
    },
    {
      image: TomatoSalad,
      alt: "TomatoSalad",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className=" rounded-2xl">
        <Image
          src={images[img].image}
          alt={images[img].alt}
          className="w-full h-full object-cover rounded-2xl ring-4 ring-amber-400/70"
        />
      </div>
    </>
  );
}
