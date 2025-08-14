# Quick Setup Guide

## Prerequisites
- Node.js 18+ installed on your computer
- Git (optional, for version control)

## Installation Steps

1. **Extract the portfolio files** to your desired directory

2. **Open terminal/command prompt** in the portfolio folder

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to: `http://localhost:5000`

## File Structure Overview

```
portfolio/
├── client/                 # Frontend (React)
│   ├── src/components/     # All UI components
│   ├── src/pages/         # Main pages
│   └── src/index.css      # Styles & animations
├── server/                # Backend (Express)
├── package.json          # Dependencies
└── README.md             # Full documentation
```

## Making Changes

### Update Personal Information:
- **Contact details:** Edit `client/src/components/Contact.tsx`
- **Resume content:** Edit `client/src/components/Hero.tsx`
- **About section:** Edit `client/src/components/About.tsx`

### Add New Projects:
- Edit `client/src/components/Portfolio.tsx`
- Add new project objects to the `portfolioItems` array

### Change Colors/Theme:
- Edit CSS variables in `client/src/index.css`

## Deployment Options

### Quick Deployment (Replit):
1. Upload files to Replit
2. Click "Deploy" button
3. Your site goes live instantly

### Other Platforms:
- **Vercel:** Connect GitHub repo → Auto-deploy
- **Netlify:** Drag & drop the `portfolio` folder
- **Railway:** Connect repo → Deploy

## Need Help?
- Check the full `README.md` for detailed documentation
- All code is well-commented for easy customization
- Modern React + TypeScript architecture for easy maintenance

## Production Build
When ready to deploy:
```bash
npm run build
npm start
```

This creates an optimized version for faster loading.