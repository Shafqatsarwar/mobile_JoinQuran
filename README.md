# Join Quran - Mobile App

This is the standalone mobile application for **Join Quran**, built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**. It is designed as a Progressive Web App (PWA) friendly, mobile-first experience.

## 📱 Project Structure

The project is located in the `mobile/` directory of the main repository.

```
mobile/
├── src/
│   ├── app/              # App Router pages and layouts
│   │   ├── layout.tsx    # Main mobile layout (includes navigation)
│   │   ├── page.tsx      # Home/Dashboard screen
│   │   └── globals.css   # Global styles & Tailwind theme
│   ├── components/       # Reusable UI components
│   │   └── MobileNav.tsx # Bottom navigation bar
│   └── ...
├── public/               # Static assets (images, icons)
├── .env.local            # Environment variables (git-ignored)
├── next.config.ts        # Next.js configuration
└── tailwind.config.ts    # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed.
- Terminal access.

### Installation

1. Navigate to the mobile directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🛠️ Running the App

### Development Mode
To start the local development server:
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).
*Note: If the main app is running on port 3000, this will automatically switch to port 3001.*

### Production Build
To build the application for production:
```bash
npm run build
```
To start the production server after building:
```bash
npm start
```

## 🧪 Testing
Currently, we use linting and build verification:
```bash
npm run lint
npm run build
```

## 📦 Deployment

This app is ready to be deployed on **Vercel**.

1. **Push to GitHub**: Ensure your code is committed and pushed.
2. **Import to Vercel**:
   - Select the repository.
   - **Root Directory**: Change this to `mobile` (Edit > Select `mobile` folder).
   - **Framework Preset**: Next.js.
   - **Environment Variables**: Add any keys from `.env.local` to Vercel project settings.
3. **Deploy**: Click Deploy.

## 🔐 Environment Variables

Create a `.env.local` file in the `mobile/` directory to store secrets. This file is ignored by Git.

Example `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_CONTACT_EMAIL=support@joinquran.com
```
