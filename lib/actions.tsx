"use server";
import { getDb } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import { log } from "console";

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

    return { success: true, message: "Recipe shared successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}
