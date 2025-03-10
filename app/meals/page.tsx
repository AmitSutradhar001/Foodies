import Link from "next/link";
export default function Meals() {
  return (
    <>
      <div className="my-32 mx-2">
        <p className="text-4xl text-gray-700/90 font-bold font-mono py-2 px-2">
          Delicious meal,created{" "}
          <span className="text-5xl text-orange-500/90">by you</span>
        </p>
        <p className="text-gray-600/70 py-2 px-2 text-2xl font-semibold">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className="flex justify-center items-center my-5">
          <Link
            href="/meals/share"
            className="text-center bg-gradient-to-r from-orange-600/70 via-orange-400 to-yellow-300 text-white font-bold cursor-pointer px-7 py-3 rounded-md animate-[scaleToggle_2s_ease-in-out_infinite]"
          >
            Share Your Favorite Recipe
          </Link>
        </div>
      </div>
    </>
  );
}
