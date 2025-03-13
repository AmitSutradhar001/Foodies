"use server";
import { getDb } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

export async function mealsShare(
  previousstate: { success: boolean; message: string },
  formData: FormData
) {
  try {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const title = formData.get("title") as string;
    const instructions = formData.get("instructions") as string;
    const image = formData.get("foodImg") as File;

    if (!username || !email || !title || !instructions || !image) {
      return { success: false, message: "Missing required fields" };
    }

    // Upload image to Cloudinary
    const imageBuffer = await image.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString("base64");
    const uploadResponse = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      { folder: "recipe_images" }
    );

    // Store in MongoDB
    const db = await getDb();
    const recipes = db.collection("recipes");

    await recipes.insertOne({
      username,
      email,
      title,
      instructions,
      imageUrl: uploadResponse.secure_url,
      createdAt: new Date(),
    });
    revalidatePath("/meals");
    return { success: true, message: "Recipe shared successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}

// get all meals
export async function getAllMeals() {
  try {
    const db = await getDb();
    const recipes = db.collection("recipes");

    // Fetch all meals and convert MongoDB _id to string
    const meals = await recipes.find().toArray();

    // Define required fields and map only valid meals
    const validMeals = meals.map((meal) => ({
      _id: meal._id?.toString() || "",
      username: meal.username || "",
      email: meal.email || "",
      title: meal.title || "",
      instructions: meal.instructions || "",
      imageUrl: meal.imageUrl || "",
      createdAt: meal.createdAt || new Date().toISOString(),
    }));

    return validMeals;
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}
