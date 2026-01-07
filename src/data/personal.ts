// Personal information used across sections
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

export const personalInfo: PersonalInfo = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    greeting: "Hello, I'm",
    tagline: 'I build modern web applications with clean code and thoughtful design.',
    email: 'hello@example.com',
    location: 'San Francisco, CA',
    avatar: '/images/avatar.jpg',
    bio: [
        "I'm a passionate developer with over 5 years of experience building web applications. I specialize in React, TypeScript, and Node.js.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying the outdoors.",
    ],
};
