"use client";

import { CldImage } from "next-cloudinary";
interface CloudinaryImgProps {
  src: string;
  width: number;
  height: number;
}

export default function CloudinaryImg({
  src,
  width,
  height,
}: CloudinaryImgProps) {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      alt="Delicious meal"
      crop="fill" // Ensures the image fills the container
      quality="auto" // Automatically optimizes quality
      format="auto" // Uses the best format (e.g., WebP)
      className="rounded-lg shadow-lg object-cover w-full h-auto" // Adds styling
    />
  );
}
// https://res.cloudinary.com/dzely4n74/image/upload/v1741676273/recipe_images/xh0s7quginv4ofwgv08n.png
