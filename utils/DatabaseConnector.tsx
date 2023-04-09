import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let cachedDb: Db;

export async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return Promise.resolve(cachedDb);
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  const db = client.db(process.env.MONGO_URI);

  cachedDb = db;

  console.log("CONNECTED TO DB");
  return Promise.resolve(db);
}
