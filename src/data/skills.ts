// Skills organized by category
export interface SkillCategory {
    name: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        name: 'Backend',
        skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
        name: 'Tools & DevOps',
        skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions'],
    },
];
