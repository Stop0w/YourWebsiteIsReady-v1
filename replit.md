# replit.md

## Overview

This is a Website-as-a-Service (WaaS) platform called "It's Done" that creates pre-built, personalized website previews for businesses without web presence. The application is built as a full-stack React/Express application with TypeScript, targeting specific business categories (starting with golf clubs and tradesmen).

## System Architecture

The application follows a monorepo structure with clear separation between client and server:

- **Frontend**: React with TypeScript, using Vite for build tooling
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)  
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Routing**: Wouter for client-side routing

## Key Components

### Directory Structure
```
/client          - React frontend application
/server          - Express backend server  
/shared          - Shared types and schemas
/components      - shadcn/ui component library
/migrations      - Database migration files
```

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle with PostgreSQL (Neon Database)
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Storage**: Currently using in-memory storage with interface for database integration
- **API Design**: RESTful endpoints for businesses, templates, and services

### URL Structure
The application implements a specific URL pattern:
```
itsdone.com.au/[business-slug]                    - Business landing page
itsdone.com.au/[business-slug]/website-[1-4]      - Template previews  
itsdone.com.au/[business-slug]/services           - Service offerings
```

## Data Flow

1. **Business Discovery**: Businesses are pre-populated in the system with category-specific data
2. **Template Rendering**: Each business category has 4 template options with different themes
3. **Preview Generation**: Templates are dynamically populated with business data
4. **Category-Specific Styling**: Different color schemes and layouts based on business type

### Database Schema
- **businesses**: Store business information, contact details, and category
- **templates**: Template configurations with features and sections
- **services**: Service offerings and pricing information

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitive components
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- Uses Vite dev server with HMR
- TSX for running TypeScript server code
- Replit integration with development banner and cartographer

### Production Build
- Vite builds client to `dist/public`
- esbuild bundles server to `dist/index.js`
- Single process serves both static files and API

### Environment Configuration
- Database URL required via `DATABASE_URL` environment variable
- Development/production modes via `NODE_ENV`
- Replit-specific development features when `REPL_ID` is present

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 29, 2025. Initial setup