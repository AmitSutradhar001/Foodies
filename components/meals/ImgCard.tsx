import Image from "next/image";
import Link from "next/link";
import CloudinaryImg from "./CloudinaryImg";

interface SingleMealProps {
  _id: string;
  username?: string;
  email?: string;
  title: string;
  instructions?: string;
  imageUrl: string;
}

export default function ImgCard(meal: SingleMealProps) {
  return (
    <>
      <Link
        href={`/meals/${meal._id}`}
        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl mt-10 hover:cursor-pointer p-4"
      >
        <CloudinaryImg src={meal.imageUrl} width={200} height={200} />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 "></div>
        <h3 className="z-10 overflow-hidden text-3xl font-semibold text-white">
          {meal.title}
        </h3>
        <div className="z-10 overflow-hidden text-lg text-white">
          Shared By{" "}
          <span className="font-bold text-orange-400">{meal.username}</span>
        </div>
      </Link>
    </>
  );
}
