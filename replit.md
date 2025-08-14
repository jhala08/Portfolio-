# Overview

This is a full-stack portfolio website for Kushal Singh Jhala, a freelance web developer, graphic designer, and video editor. The application showcases his skills, projects, services, and contact information through an interactive and responsive design. Built with React, TypeScript, Express.js, and modern CSS frameworks, it demonstrates professional web development capabilities while serving as a living example of his work.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and data fetching
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting light/dark mode
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Design System**: Custom design tokens with CSS variables, glass morphism effects, and gradient styling

## Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Build System**: ESBuild for server bundling, Vite for frontend
- **Development**: Hot module replacement with Vite middleware in development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (extensible to database)
- **API Design**: RESTful API structure with /api prefix for all endpoints

## Component Structure
- **Modular Components**: Separate components for each portfolio section (Hero, About, Skills, Portfolio, Services, Contact)
- **UI Components**: Comprehensive component library including forms, dialogs, navigation, and interactive elements
- **Theme Provider**: Context-based theme management with localStorage persistence
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Data Layer
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Type Safety**: Zod schemas for runtime validation integrated with Drizzle
- **Database Configuration**: Prepared for PostgreSQL with Neon Database serverless driver
- **Migrations**: Drizzle Kit for database schema migrations

## Development Tools
- **Type Checking**: Strict TypeScript configuration with path mapping
- **Code Quality**: ESModules throughout, consistent import/export patterns
- **Build Process**: Separate build commands for client and server with optimized production builds
- **Development Experience**: Live reload, error overlays, and development logging

# External Dependencies

## Database & ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database (configured but not actively used in current implementation)
- **Database Driver**: @neondatabase/serverless for connection pooling and edge compatibility

## UI & Styling
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe CSS class composition

## Development & Build
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for server-side code

## Runtime & Utilities
- **React Query**: Server state management and caching
- **React Hook Form**: Form validation and management
- **Date-fns**: Date manipulation utilities
- **Wouter**: Lightweight client-side routing

## Fonts & Assets
- **Google Fonts**: Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono
- **Unsplash Images**: Professional photography for portfolio showcase