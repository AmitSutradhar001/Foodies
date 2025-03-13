import Image from "next/image";
import { getDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Loading from "@/app/loading";

async function getMealById(id: string) {
  try {
    const db = await getDb();
    const recipes = db.collection("recipes");

    // Convert string ID to ObjectId and find the meal
    const meal = await recipes.findOne({ _id: new ObjectId(id) });

    if (!meal) return {};

    return {
      _id: meal._id?.toString() || "",
      username: meal.username || "",
      email: meal.email || "",
      title: meal.title || "",
      instructions: meal.instructions || "",
      imageUrl: meal.imageUrl || "",
      createdAt: meal.createdAt || new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching meal by ID:", error);
    return {};
  }
}
interface SlugPageProps {
  params: Promise<{ id: string }>;
}

export default async function Slug({ params }: SlugPageProps) {
  const { id } = await params;

  if (!id) {
    return <Loading />; // Show loading state when ID is not available
  }
  const meal = await getMealById(id);

  return (
    <>
      <div className="w-full mt-24 flex justify-center items-center">
        <div className="flex justify-around items-start w-4/5 gap-4 flex-col md:flex-row ">
          <div className="w-full md:w-1/3">
            <Image
              src={meal.imageUrl}
              width={400}
              height={400}
              alt={meal.title}
              className="rounded-xl"
            />
          </div>

          <div className="w-full md:w-2/3 md:pl-20 h-full overflow-hidden break-words whitespace-normal  text-gray-700 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl py-4 font-bold text-orange-400 text-justify">
                {meal.title
                  .toLowerCase()
                  .split(" ")
                  .map(
                    (word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
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
                  (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
