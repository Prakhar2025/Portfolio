// Project data displayed in Work section
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    href?: string;
}

export const projects: Project[] = [
    {
        id: 'project-1',
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart, checkout, and payment integration.',
        image: '/images/projects/project-1.jpg',
        tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    },
    {
        id: 'project-2',
        title: 'Task Management App',
        description: 'A collaborative task manager with real-time updates and team features.',
        image: '/images/projects/project-2.jpg',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    },
    {
        id: 'project-3',
        title: 'Analytics Dashboard',
        description: 'Data visualization dashboard with interactive charts and reports.',
        image: '/images/projects/project-3.jpg',
        tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    },
    {
        id: 'project-4',
        title: 'AI Content Generator',
        description: 'An AI-powered tool for generating marketing copy and blog posts.',
        image: '/images/projects/project-4.jpg',
        tech: ['Next.js', 'OpenAI', 'Tailwind CSS', 'Vercel'],
    },
];
