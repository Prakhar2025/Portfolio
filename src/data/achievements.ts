// Achievements and certifications data
export interface Achievement {
    id: string;
    title: string;
    description: string;
    year: string;
    icon: string;
}

export const achievements: Achievement[] = [
    {
        id: 'achievement-1',
        title: 'AWS Solutions Architect',
        description: 'Certified AWS Solutions Architect - Associate level.',
        year: '2024',
        icon: '🏆',
    },
    {
        id: 'achievement-2',
        title: 'Hackathon Winner',
        description: 'First place at TechCrunch Disrupt Hackathon.',
        year: '2023',
        icon: '🥇',
    },
    {
        id: 'achievement-3',
        title: 'Open Source Contributor',
        description: 'Core contributor to popular React component library.',
        year: '2023',
        icon: '⭐',
    },
    {
        id: 'achievement-4',
        title: 'Speaker at ReactConf',
        description: 'Presented on performance optimization techniques.',
        year: '2022',
        icon: '🎤',
    },
];
