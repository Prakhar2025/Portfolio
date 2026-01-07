// Shared TypeScript types and interfaces
export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    label: string;
    href: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    href?: string;
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    year: string;
    icon: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    greeting: string;
    tagline: string;
    email: string;
    location: string;
    avatar: string;
    bio: string[];
}
