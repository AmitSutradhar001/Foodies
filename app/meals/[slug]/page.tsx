import CloudinaryImg from "@/components/meals/CloudinaryImg";
import { getMealById } from "@/lib/actions";

interface SlugPageProps {
  params: { slug: string };
}

export default async function Slug({ params }: SlugPageProps) {
  const { slug } = params;
  // Fetch meal data
  const meal = await getMealById(slug);

  if (!meal) {
    return (
      <div className="w-full mt-24 flex justify-center items-center">
        <p className="text-red-500">Meal not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full mt-24 flex justify-center items-center">
        <div className="flex justify-around items-start w-4/5 gap-4 flex-col md:flex-row ">
          <div className="w-full md:w-1/3">
            <CloudinaryImg src={meal.imageUrl} width={200} height={200} />
          </div>

          <div className="w-full md:w-2/3 md:pl-20 h-full overflow-hidden break-words whitespace-normal  text-gray-700 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl py-4 font-bold text-orange-400 text-justify">
                {meal.title
                  .toLowerCase()
                  .split(" ")
                  .map(
                    (word: any) => word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join(" ")}
              </h1>
              <p className="text-lg text-blue-500/80 font-semibold">
                {new Date(meal.createdAt).toLocaleDateString()}
              </p>
            </div>
            <p className="whitespace-pre-line font-normal text-gray-700/90">
              {meal.instructions
                .toLowerCase()
                .split(" ")
                .map(
                  (word: any) => word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
