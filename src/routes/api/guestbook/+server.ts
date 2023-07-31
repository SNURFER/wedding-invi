import { json } from '@sveltejs/kit';
import { getGuestbookCollection } from '$db/mongo';
import { ObjectId } from 'mongodb';

export async function GET() {
	const collection = await getGuestbookCollection();
	const guestbooks = await collection.find({}).project({ password: 0 }).toArray();
	return json({
		guestbooks
	});
}

export async function POST({ request }) {
	const collection = await getGuestbookCollection();
	const data = await request.json();
	data.date = new Date();
	const res = await collection.insertOne(data);
	console.log(res.insertedId);

	return json({
		insertedId: res.insertedId,
		date: data.date
	});
}
