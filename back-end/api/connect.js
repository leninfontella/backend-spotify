// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://lenincazzeri:uJNSv75rCxKrz3fS@cluster0.y9ocp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const SongCollection = await db.collection("songs").find({}).toArray();

// console.log(SongCollection);
