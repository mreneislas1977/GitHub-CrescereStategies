'use client';

export default function Home() {
  return (
    <main style={{ 
      padding: '4rem', 
      fontFamily: 'system-ui, sans-serif', 
      textAlign: 'center',
      backgroundColor: '#f9fafb',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#111827', fontSize: '2.5rem', marginBottom: '1rem' }}>
          Crescere Strategies
        </h1>
        <p style={{ color: '#4b5563', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Welcome to the next generation of psychometric assessment.
        </p>
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          backgroundColor: '#ecfdf5', 
          borderRadius: '8px',
          border: '1px solid #10b981'
        }}>
          <p style={{ color: '#065f46', fontWeight: '600' }}>
            System Status: Online & Operational
          </p>
        </div>
      </div>
    </main>
  );
}
