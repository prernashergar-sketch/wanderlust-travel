# Wanderlust — Explore the World

A responsive travel website built with React, Vite, JavaScript and CSS. No backend, no database.
The contact form is a demo and never sends email.

## Run locally
Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev      # opens at http://localhost:5173
```

## Build for production
```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Customize
- Destinations, images and tips: `src/data.js`
- Colors and fonts: CSS variables in `src/index.css`
- Layout and component styles: `src/App.css`

## Deploy with GitHub + Vercel
1. Create an empty repository on github.com (e.g. `wanderlust`).
2. In the project folder run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/wanderlust.git
   git push -u origin main
   ```
3. Go to vercel.com, sign in with GitHub and click **Add New → Project**.
4. Import the `wanderlust` repo. Vercel detects Vite automatically
   (Build command `npm run build`, Output directory `dist`).
5. Click **Deploy**. Every future `git push` redeploys automatically.

## Images
Photos load from Unsplash. If one fails, a gradient fallback appears. To swap an image, edit its URL in `src/data.js`.
