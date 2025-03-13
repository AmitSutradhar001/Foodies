import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = { tls: true };

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env");
}

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

const getDb = async () => {
  const dbClient = await clientPromise;
  return dbClient.db("Foodies"); // Manually setting database name
};

export { getDb };
export default clientPromise;
