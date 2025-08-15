# Kushal Singh Jhala - Portfolio Website

A modern, responsive portfolio website showcasing web development, graphic design, and video editing skills. Built with React, TypeScript, Express.js, and Tailwind CSS.

## Features

- ✨ Modern glassmorphism design with smooth animations
- 🌓 Dark/light theme toggle with localStorage persistence
- 📱 Fully responsive design for all devices
- 🎨 Portfolio gallery with filtering (Web Dev, Design, Video)
- 🚀 Smooth scrolling navigation
- ⚡ Fast loading with Vite build system
- 🎭 Professional animations and transitions

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Wouter** for client-side routing
- **TanStack Query** for data fetching
- **Lucide React** for icons
- **Shadcn/ui** component library

### Backend
- **Express.js** with TypeScript
- **ESBuild** for server bundling
- **Drizzle ORM** for database operations
- **PostgreSQL** ready (via Neon Database)

## Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/           # Utility functions
│   │   ├── hooks/         # Custom React hooks
│   │   └── index.css      # Global styles and animations
│   └── index.html         # HTML template
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite development setup
├── shared/                 # Shared TypeScript types
└── package.json           # Dependencies and scripts
```

## Installation & Setup

1. **Install Node.js** (version 18 or higher)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5000`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start production server:**
   ```bash
   npm start
   ```

## Key Components

### Navigation
- Fixed top navigation with smooth scrolling
- Theme toggle (light/dark mode)
- Responsive design with glassmorphism effect

### Hero Section
- Gradient text animation
- Call-to-action buttons
- Resume download functionality
- Animated background effects

### Portfolio Gallery
- Filterable project showcase
- Categories: Web Development, Design, Video
- Hover animations and transitions
- Professional project images

### Skills Showcase
- Three main skill categories
- Floating animation effects
- Technology tags with color coding
- Interactive hover states

### Contact Section
- Professional contact information
- Email integration for project inquiries
- Location details
- Call-to-action button

## Customization

### Adding New Projects
Edit `client/src/components/Portfolio.tsx` and add new items to the `portfolioItems` array:

```typescript
{
  id: 12,
  title: 'Your Project Name',
  description: 'Project description',
  category: 'web', // 'web', 'design', or 'video'
  image: 'https://your-image-url.com',
  alt: 'Image description'
}
```

### Changing Colors
Update the CSS variables in `client/src/index.css`:

```css
:root {
  --primary: hsl(248.4, 83.8%, 70%);
  --secondary: hsl(266.1, 85%, 72.2%);
  --accent: hsl(186.5, 96.4%, 42.9%);
}
```

### Adding New Skills
Edit `client/src/components/Skills.tsx` to add new skill categories or technologies.

### Contact Information
Update contact details in `client/src/components/Contact.tsx`.

## Deployment

This website is optimized for deployment on platforms like:
- **Replit** (recommended for quick deployment)
- **Vercel**
- **Netlify**
- **Railway**
- **Heroku**

For Replit deployment:
1. Push code to GitHub
2. Import to Replit
3. Click "Deploy" button
4. Your site will be live at `your-project.replit.app`

## Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images with lazy loading
- Minimal JavaScript bundle
- CSS animations using GPU acceleration
- Efficient React rendering with proper key props
- Fast Vite development server

## License

MIT License - feel free to use this code for your own portfolio!

---

Built with ❤️ by Kushal Singh Jhala