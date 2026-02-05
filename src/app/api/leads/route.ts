import { NextResponse } from 'next/server';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), 
  });
}
const db = admin.firestore();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add to 'insights_leads' collection
    await db.collection('insights_leads').add({
      ...data,
      serverTimestamp: admin.firestore.FieldValue.serverTimestamp(),
      results: "Initial Access - No results yet", // You can update this later when they finish the tool
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Storage failed" }, { status: 500 });
  }
}
