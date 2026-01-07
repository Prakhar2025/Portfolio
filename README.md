<p align="center">
  <img src="public/images/og.jpg" alt="Portfolio" width="600" />
</p>

<h1 align="center">Portfolio</h1>

<p align="center">
  A minimal, production-grade portfolio built with Next.js 14, TypeScript, and Tailwind CSS.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#customization">Customization</a> •
  <a href="#deployment">Deployment</a>
</p>

---

## Features

- ⚡ **Next.js 14 App Router** — Latest React framework with server components
- 🎨 **Tailwind CSS** — Utility-first styling with custom design system
- 📱 **Fully Responsive** — Mobile-first design, works on all devices
- 🎭 **Framer Motion** — Subtle, performant animations
- 🔍 **SEO Optimized** — Meta tags, Open Graph, structured data ready
- 📝 **TypeScript** — Full type safety across the codebase
- 🧩 **Modular Architecture** — Clean separation of components, data, and utilities

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 14](https://nextjs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Linting | [ESLint](https://eslint.org/) |
| Deployment | [Vercel](https://vercel.com/) |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Prakhar2025/Portfolio.git

# Navigate to project
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Home, Work, Skills, etc.)
│   └── ui/              # Reusable UI components
├── config/              # Site configuration
├── data/                # Static content (projects, skills, etc.)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
└── types/               # TypeScript interfaces
```

## Customization

### Personal Information

Edit `src/data/personal.ts`:

```ts
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  // ...
};
```

### Projects

Edit `src/data/projects.ts` to add your work.

### Skills

Edit `src/data/skills.ts` to update your tech stack.

### Styling

Customize colors and fonts in `tailwind.config.ts`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Prakhar2025/Portfolio)

### Manual

```bash
npm run build
npm run start
```

## License

MIT © [Prakhar](https://github.com/Prakhar2025)

---

<p align="center">
  Made with ❤️ using Next.js
</p>
