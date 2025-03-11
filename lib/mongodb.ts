import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = { tls: true };

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env");
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

const getDb = async () => {
  const client = await clientPromise;
  return client.db("Foodies"); // Manually setting database name
};

export { getDb };
export default clientPromise;
