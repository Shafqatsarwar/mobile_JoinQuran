# Deployment Guide: Google Play Store (PWA)

This guide explains how to deploy your **Join Quran Mobile App** to the Google Play Store as a Trusted Web Activity (TWA).

## Prerequisites
1.  **Google Play Developer Account**: You must have an active account ($25 one-time fee).
2.  **Deployed URL**: Your app must be deployed to a public HTTPS URL (e.g., on Vercel).

## Step 1: Deploy to Vercel
1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  **Important**: Set the **Root Directory** to `mobile`.
4.  Deploy and copy your production URL (e.g., `https://join-quran-mobile.vercel.app`).

## Step 2: Generate Android App (APK/AAB)
We will use **PWABuilder**, a free tool by Microsoft, to wrap your PWA.

1.  Go to [PWABuilder.com](https://www.pwabuilder.com/).
2.  Enter your Vercel URL and click **Start**.
3.  Wait for the audit to complete. You should see "Manifest" and "Service Worker" (or at least Manifest) as passing.
4.  Click **Build My PWA**.
5.  Select **Android**.
6.  **Fill in the details**:
    - **Package ID**: `com.joinquran.mobile` (or similar unique ID).
    - **App Name**: Join Quran.
    - **Launcher Icon**: Upload the icon if asked (it should pull from manifest).
    - **Signing Key**: You can let PWABuilder generate a signing key for you (download it and keep it safe!).
7.  Click **Generate**.
8.  Download the `.zip` file. Inside, you will find an `.aab` (Android App Bundle) file.

## Step 3: Upload to Google Play Console
1.  Go to [Google Play Console](https://play.google.com/console).
2.  **Create App**: Click "Create app" and fill in the details.
3.  **Set up your store listing**: Upload screenshots, description, logo, etc.
4.  **Upload Bundle**:
    - Go to **Production** (or Internal Testing).
    - Create a new release.
    - Upload the `.aab` file you downloaded from PWABuilder.
5.  **Asset Links**:
    - Google will ask you to verify ownership of the website.
    - It will provide a `assetlinks.json` file or content.
    - You must host this file at `https://your-url.com/.well-known/assetlinks.json`.
    - *Note: In Next.js, place this file in `mobile/public/.well-known/assetlinks.json` and redeploy to Vercel.*
6.  **Review and Rollout**: Submit your app for review.

## Troubleshooting
- **"Digital Asset Links"**: This is the most common issue. Ensure `assetlinks.json` is accessible at your URL.
- **Icons**: Ensure your manifest has at least a 192x192 and 512x512 icon (we have added these).
