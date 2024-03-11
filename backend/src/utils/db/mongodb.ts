import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let collectionName = "ecommerce"
client.on('commandStarted', started => console.log(started));
const db =  client.db().collection(collectionName)

try {

} catch(e) {
  console.error(e);
}
export default db;