# GitHub-CrescereStategies

Crescere Strategies Web Platform
A high-performance, responsive corporate website built for Crescere Strategies LLC, a consultancy firm specializing in organizational transformation for non-profits and early-stage start-ups. This platform features a modular React architecture, automated CI/CD pipelines via Google Cloud, and integrated lead generation tools.

🚀 Technology Stack
Framework: Next.js 13+ (App Router)

Language: TypeScript

Styling: Tailwind CSS

Backend/Database: Firebase Admin SDK & Firestore

Containerization: Docker

Cloud Infrastructure: Google Cloud Platform (Cloud Run, Cloud Build, Container Registry)

✨ Key Features

Strategic UI/UX: Custom design system utilizing "Crescere Green" and "Gold" branding with Playfair/Montserrat typography.


Lead Magnet System: Integrated modal (LeadMagnetModal.tsx) that captures user details (Name, Organization, Phone) and stores them in a Firestore collection named insights_leads.


Interactive Components: Scroll-triggered animations in the Hero and Solutions sections using Intersection Observers.


Automated Deployment: Full CI/CD pipeline configured to build, tag, and deploy to Google Cloud Run upon pushing to the main branch.

📂 Project Structure
Bash
├── src/
│   ├── app/
│   │   ├── api/leads/      # API route for handling form submissions [cite: 112]
│   │   ├── insights/       # Executive Insights page [cite: 118]
│   │   ├── layout.tsx      # Root layout with fonts and providers
│   │   └── page.tsx        # Main landing page composition
│   ├── components/         # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Challenges.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── LeadMagnetModal.tsx
│   │   ├── Process.tsx
│   │   └── Stakeholders.tsx
│   └── global.css          # Tailwind directives and base styles [cite: 123]
├── cloudbuild.yaml         # Google Cloud Build configuration 
├── Dockerfile              # Multi-stage Docker build for production [cite: 108]
├── tailwind.config.ts      # Design system configuration [cite: 111]
└── next.config.js          # Next.js configuration [cite: 110]

Cloud Build Configuration

Logging: Configured to CLOUD_LOGGING_ONLY to support user-managed service accounts without requiring a default GCS bucket.


Triggers: The build is triggered automatically on a Push to a branch event targeting ^main$.

Substitutions: The following variables must be defined in the Cloud Build Trigger settings:

_FIREBASE_API_KEY

_FIREBASE_AUTH_DOMAIN

_FIREBASE_PROJECT_ID

_FIREBASE_STORAGE_BUCKET

_FIREBASE_MESSAGING_SENDER_ID

_FIREBASE_APP_ID

📄 License
© 2026 Crescere Strategies LLC. All Rights Reserved.

/tailwind.config.ts

/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind where your styles are being used
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'crescere-green': '#014421',
        'crescere-cream': '#fdfbf5',
        'crescere-brown': '#5c4033',
        'crescere-gold': '#f0bd23',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'], // Using CSS variables is better for Next.js fonts
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
adjusted 02152026 at 11:40 AM
