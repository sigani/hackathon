// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { projects?: mongoDB.Collection } = {};

// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGODB_URI as string
  );

  await client.connect();

  const db: mongoDB.Db = client.db("hackathon");

  const projectsCollection: mongoDB.Collection = db.collection("project");

  collections.projects = projectsCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${projectsCollection.collectionName}`
  );
}
