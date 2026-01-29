// Timeline section - career journey and milestones
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

const timeline = [
    {
        id: 1,
        year: '2022',
        title: 'Started B.Tech in CSE',
        organization: 'Rashtrasant Tukadoji Maharaj Nagpur University',
        description: 'Began journey in Computer Science and Engineering',
        type: 'education',
    },
    {
        id: 2,
        year: '2023',
        title: 'First Live Project - School Website',
        organization: 'Jain International School',
        description: 'Built and deployed complete school website (Aug 2023 - Apr 2024)',
        type: 'work',
        link: {
            label: 'View LOR',
            href: '/jain-school-lor.pdf',
        },
    },
    {
        id: 3,
        year: '2024',
        title: 'National Project Presentations',
        organization: 'BITS Pilani & Azim Premji University',
        description: 'Presented Deepfake Detection project at national-level competitions',
        type: 'achievement',
    },
    {
        id: 4,
        year: '2024',
        title: 'IIT Delhi Innovation Challenge - Winner',
        organization: 'Top 15 Finalist',
        description: 'Won ₹20,000 prize money for Deepfake Detection project',
        type: 'achievement',
    },
    {
        id: 5,
        year: '2025',
        title: 'First Research Paper Published',
        organization: 'i-manager\'s Journal on Image Processing',
        description: 'Advanced Deepfake Image Detection Framework',
        type: 'research',
    },
    {
        id: 6,
        year: '2025',
        title: 'IEEE Conference Paper',
        organization: 'PUNECON 2025',
        description: 'Comprehensive Deepfake Detection: Comparative Study',
        type: 'research',
    },
];

const typeStyles = {
    education: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    work: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    achievement: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    research: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
};

export default function TimelineSection() {
    return (
        <section id="timeline" className="py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="Journey"
                        subtitle="Milestones and achievements along the way"
                        gradient
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-violet-500/50" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={fadeInUp}
                                className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Year badge */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm border-4 border-[#0a0a0a] z-10">
                                    {item.year}
                                </div>

                                {/* Content card */}
                                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors group">
                                        {/* Type badge */}
                                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full mb-3 border ${typeStyles[item.type as keyof typeof typeStyles]}`}>
                                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            {item.title}
                                        </h3>

                                        {/* Organization */}
                                        <p className="text-violet-400 font-medium mb-2">
                                            {item.organization}
                                        </p>

                                        {/* Description */}
                                        <p className="text-white/50 leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        {/* Link if available */}
                                        {item.link && (
                                            <a
                                                href={item.link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                {item.link.label}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
