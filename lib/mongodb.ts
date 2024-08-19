import { MongoClient, Db } from 'mongodb';

let uri = process.env.DATABASE_URL;
let dbName = process.env.DB_NAME;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (uri !== undefined) {
    const client = new MongoClient(uri);

    await client.connect();
    const db = client.db(dbName);

    cachedClient = client;
    cachedDb = db;

  }
    return { cachedClient, cachedDb };
}