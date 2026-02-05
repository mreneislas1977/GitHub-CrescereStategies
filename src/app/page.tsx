'use client';
export const dynamic = "force-dynamic";

import { db } from '../firebaseConfig';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function Home() {
  const [dbStatus, setDbStatus] = useState('Checking database...');

  useEffect(() => {
    async function checkConnection() {
      try {
        const q = query(collection(db, 'test'), limit(1));
        await getDocs(q);
        setDbStatus('Database Connected successfully!');
      } catch (error) {
        console.error(error);
        setDbStatus('App Live, but Database Connection failed.');
      }
    }
    checkConnection();
  }, []);

  return (
    <main style={{ padding: '4rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#0070f3' }}>Crescere Strategies</h1>
      <p style={{ fontSize: '1.2rem' }}>Status: <strong>{dbStatus}</strong></p>
    </main>
  );
}
