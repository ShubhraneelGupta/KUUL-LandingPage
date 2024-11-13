// api/waitlist.js
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return res.status(400).json({ message: "Invalid email address" }); // Send message for invalid email
    }

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
      await client.connect();
      const db = client.db("waitlistDB");
      const collection = db.collection("waitlist");

      const existingEntry = await collection.findOne({ email });
      if (existingEntry) {
        return res.status(409).json({ message: "Email already on the waitlist" }); // Handle duplicate email
      }

      await collection.insertOne({ email, createdAt: new Date() });
      return res.status(201).json({ message: "Email successfully added to the waitlist" }); // Success message
    } catch (error) {
      console.error("Database connection error:", error);
      return res.status(500).json({ message: "Server error, please try again later" }); // Server error message
    } finally {
      await client.close();
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "Method Not Allowed" }); // Method Not Allowed if not POST
  }
}
