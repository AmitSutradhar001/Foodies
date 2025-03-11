import Link from "next/link";
import ImgCard from "@/components/meals/ImgCard";
import { getAllMeals } from "@/lib/actions";
import { Suspense } from "react";
import Loading from "../loading";

interface SingleMealProps {
  _id: string;
  username?: string;
  email?: string;
  title: string;
  instructions?: string;
  imageUrl: string;
}

export default async function Meals() {
  return (
    <>
      <div className="mt-28 mx-2">
        <p className="text-4xl text-gray-700/90 font-bold font-mono py-2 px-2">
          Delicious meal, created{" "}
          <span className="text-5xl text-orange-500/90">by you</span>
        </p>
        <p className="text-gray-600/70 py-2 px-2 text-2xl font-semibold">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className="flex justify-center items-center my-3">
          <Link
            href="/meals/share"
            className="text-center bg-gradient-to-r from-orange-600/70 via-orange-400 to-yellow-300 text-white font-bold cursor-pointer px-7 py-3 rounded-md animate-[scaleToggle_2s_ease-in-out_infinite]"
          >
            Share Your Favorite Recipe
          </Link>
        </div>
      </div>

      {/* Use Suspense to show loading while fetching meals */}
      <Suspense fallback={<Loading />}>
        <MealsList />
      </Suspense>
    </>
  );
}

// Separate component to handle data fetching
async function MealsList() {
  const meals = await getAllMeals();

  return meals.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {meals.map((meal) => (
        <ImgCard key={meal._id} {...meal} />
      ))}
    </div>
  ) : (
    <p className="text-center text-2xl font-semibold text-gray-500 mt-5">
      Currently, no meals are available. Thank you!
    </p>
  );
}
