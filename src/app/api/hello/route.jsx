// src/app/api/hello/route.js

import { connectToDatabase } from '../../lib/mongodb'; // Adjust path as necessary

export async function GET(request) {
  try {
    const db = await connectToDatabase();
    const collection = db.db("DeskMates").collection("users");

    // Get all users from MongoDB collection
    const users = await collection.find({}).toArray();
    console.log(users)
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.log(error)
    console.log(process.env.MONGODB_URI)
    return new Response(
      JSON.stringify({ error: 'Failed to connect to the database' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(request) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('users');

    // Insert a new user into MongoDB collection
    await collection.insertOne({ name: 'John Doe' });

    return new Response(
      JSON.stringify({ message: 'Data inserted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to connect to the database' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
