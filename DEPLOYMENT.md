# 🚀 Portfolio Deployment Guide

## Quick Share Options

### Option 1: **GitHub Pages** (Free & Easiest)
1. Push your portfolio to GitHub: `git push origin main`
2. Go to Settings → Pages → Source: Select `main` branch
3. Your portfolio will be live at: `https://yourusername.github.io/portfolioo`
4. Share this link with friends!

### Option 2: **Netlify** (Free & Recommended)
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify deploy --prod --dir=.`
3. Follow the prompts
4. Get a live URL instantly!

### Option 3: **Vercel** (Free & Fast)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Get a live URL: `https://yourdomain.vercel.app`

### Option 4: **Run Locally for Friends**
Share the server IP with friends:
```bash
# Get your IP address
hostname -I

# Then friends can visit: http://YOUR_IP:3000
```

## Current Server Status
- **Local URL**: http://localhost:3000
- **Port**: 3000
- **Live Reload**: ✓ Enabled

## Quick Deploy Commands

```bash
# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=.

# Deploy to Vercel
npm install -g vercel
vercel --prod
```

## Server File
The live server is running via [server.js](server.js) with automatic reload detection.

---

**Choose GitHub Pages or Netlify for the easiest sharing!**
