import { MongoClient } from "mongodb";

// api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://epahs57:jj95929592@meetup.tfm8rqb.mongodb.net/meetup?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetup");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
