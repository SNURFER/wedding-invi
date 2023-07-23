// mongo.ts
import { MongoClient, Db } from 'mongodb';
import { MONGO_URL, VITE_NODE_ENV } from '$env/static/private';

let mongoClient: MongoClient | null = null;
let database: Db | null = null;

export async function connectToDatabase() {
	if (mongoClient && database) {
		return { mongoClient, database };
	}
	mongoClient = await new MongoClient(MONGO_URL).connect();
	if (VITE_NODE_ENV === 'develop') {
		database = await mongoClient.db('wedding-invi-dev');
	} else {
		database = await mongoClient.db('wedding-invi');
	}
	return { mongoClient, database };
}

export async function getGuestbookCollection() {
	const { database } = await connectToDatabase();
	return database.collection('guest-message');
}
