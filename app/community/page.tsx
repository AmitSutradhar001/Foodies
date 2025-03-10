import Image from "next/image";

import mealIcon from "@/public/icons/meal.png";
import communityIcon from "@/public/icons/community.png";
import eventsIcon from "@/public/icons/events.png";
// import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className="mt-5 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-600/90 xl:text-white">
          One shared passion:{" "}
          <span className="text-blue-700/70 font-extrabold text-5xl">Food</span>
        </h1>
        <p className="py-5 text-lg text-gray-700 font-semibold">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="mt-5 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold text-orange-400">
          Community Perks
        </h2>
        <ul>
          <li className="text-2xl text-center font-semibold text-purple-600">
            <div className="flex flex-col items-center justify-center w-full">
              <Image
                src={mealIcon}
                alt="A delicious meal"
                className="w-52 h-52 object-cover"
              />
              <p>Share & discover recipes</p>
            </div>
          </li>
          <li className="text-2xl text-center font-semibold text-purple-600">
            <div className="flex flex-col items-center justify-center w-full">
              <Image
                src={communityIcon}
                alt="A crowd of people, cooking"
                className="w-52 h-52 object-cover"
              />
              <p>Find new friends & like-minded people</p>
            </div>
          </li>
          <li className="text-2xl text-center font-semibold text-purple-600">
            <div className="flex flex-col items-center justify-center w-full">
              <Image
                src={eventsIcon}
                alt="A crowd of people at a cooking event"
                className="w-52 h-52 object-cover"
              />
              <p>Participate in exclusive events</p>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}
