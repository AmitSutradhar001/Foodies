import ImageCarousel from "@/components/home/ImageCarousel";

export default function Home() {
  return (
    <>
      <div className="w-full mt-24 flex justify-center items-center">
        <div className="flex justify-around items-center w-3/4 gap-4 flex-col md:flex-row ">
          <div className="w-1/2 ">
            <ImageCarousel />
          </div>
          <div className="w-1/2">
            <div className="py-2">
              <p className=" bg-gradient-to-r from-pink-500 font-mono to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent">
                NEXTLEVEL FOOD FOR
              </p>

              <p className="bg-gradient-to-r from-pink-500 font-mono to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent">
                NEXTLEVEL FOODIES
              </p>
            </div>

            <p className="py-2 text-lg font-extrabold text-gray-600/70">
              Test & share food from all over the world.
            </p>
            <div className="py-2 flex justify-between items-center gap-3">
              <p className="bg-gradient-to-r from-orange-500 font-mono to-violet-500 bg-clip-text font-extrabold text-transparent">
                Join the Community
              </p>

              <button className="text-center bg-gradient-to-r from-orange-600/70 via-orange-400 to-yellow-300 text-white font-bold cursor-pointer px-7 py-3 rounded-md animate-[scaleToggle_2s_ease-in-out_infinite]">
                Explore Meals
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
