// Experience section - minimal and professional
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

const experiences = [
    {
        id: 1,
        role: 'Web Developer',
        company: 'Jain International School',
        period: 'Aug 2023 – Apr 2024',
        description: 'Developed and maintained the official school website, improving responsiveness, performance, and content management across the platform.',
        type: 'LOR',
    },
    {
        id: 2,
        role: 'React Native Intern',
        company: 'Anishree Technologies LLP',
        period: 'Dec 2025 – Present',
        description: 'Building a production-grade React Native mobile application with secure authentication and real client requirements.',
        type: 'Internship',
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-32 relative">
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="Experience"
                        subtitle="Professional journey and industry contributions"
                        gradient
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            variants={fadeInUp}
                            className="group relative"
                        >
                            {/* Timeline connector */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent hidden sm:block" />

                            <div className="sm:pl-8 relative">
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-violet-500 -translate-x-[3.5px] hidden sm:block" />

                                {/* Content */}
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <h3 className="text-xl font-semibold text-white">
                                            {exp.role}
                                        </h3>
                                        <span className="text-sm text-violet-400 font-medium">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="text-white/60 font-medium mb-3">
                                        {exp.company}
                                    </p>

                                    <p className="text-white/50 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
