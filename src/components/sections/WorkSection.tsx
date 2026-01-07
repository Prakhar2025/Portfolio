// Projects section with tilt cards and hover effects
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading, TiltCard, MagneticButton } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

const projects = [
    {
        id: 1,
        title: 'AI Analytics Platform',
        description: 'Real-time ML-powered analytics dashboard for enterprise data insights.',
        tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
        live: '#',
        github: '#',
    },
    {
        id: 2,
        title: 'SaaS Starter Kit',
        description: 'Production-ready boilerplate with auth, billing, and multi-tenancy.',
        tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
        live: '#',
        github: '#',
    },
    {
        id: 3,
        title: 'Neural Code Assistant',
        description: 'AI-powered code completion and review tool for development teams.',
        tech: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
        live: '#',
        github: '#',
    },
    {
        id: 4,
        title: 'Cloud Infrastructure CLI',
        description: 'Developer tool for managing multi-cloud deployments via terminal.',
        tech: ['Go', 'AWS', 'GCP', 'Terraform'],
        live: '#',
        github: '#',
    },
];

export default function WorkSection() {
    return (
        <section id="work" className="py-32 relative">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="Selected Work"
                        subtitle="Projects that showcase my expertise in building scalable solutions"
                        gradient
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={fadeInUp}>
                            <TiltCard className="h-full" glowColor="rgba(139, 92, 246, 0.3)">
                                <div className="p-6 sm:p-8 flex flex-col h-full">
                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/50 mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 rounded-full border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <MagneticButton
                                            href={project.live}
                                            variant="secondary"
                                            size="sm"
                                            external
                                        >
                                            <span className="flex items-center gap-2">
                                                Live
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </span>
                                        </MagneticButton>
                                        <MagneticButton
                                            href={project.github}
                                            variant="ghost"
                                            size="sm"
                                            external
                                        >
                                            <span className="flex items-center gap-2">
                                                GitHub
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
