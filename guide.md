# JoinQuran Mobile Application Guide

## Overview
The JoinQuran Mobile App is a specialized version of the platform optimized for mobile experiences, built with Next.js. It includes a dedicated AI chatbot to assist users on the go.

## Project Structure
- `src/`: Source code.
  - `app/`: App Router structure.
  - `components/`: Mobile-optimized components (including `Chatbot.tsx`).
- `public/`: Static assets.

## Key Features
- **Mobile-First Design**: Optimized touch interfaces and layouts.
- **AI Chatbot**: Integrated with Google Gemini (`src/app/api/chatbot`) for consistent AI assistance.
- **Performance**: Lightweight and fast-loading.

## Setup & Installation
1. **Navigate to Mobile Directory**:
   ```bash
   cd mobile
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Environment Variables**:
   Create a `.env` file in the `mobile/` directory:
   ```env
   GOOGLE_API_KEY=your_google_gemini_api_key
   ```
4. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Integration Notes
- The chatbot shares the same system prompt logic as the main web app but operates independently.
- Ensure the `GOOGLE_API_KEY` is valid and has access to the Gemini API.

## Deployment
Deploy as a separate project or a sub-path project on Vercel, ensuring the build command is scoped to the `mobile` directory if needed.
