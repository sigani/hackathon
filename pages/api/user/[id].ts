import { NextApiResponse, NextApiRequest } from "next";
import { connectToDatabase } from "../../../utils/DatabaseConnector";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, method, body } = req;
  const db = await connectToDatabase();
  const collection = await db.collection("users");

  console.log(query);
  switch (method) {
    case "GET":
      const user = await collection.findOne();
      return res.status(200).json(user);

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
