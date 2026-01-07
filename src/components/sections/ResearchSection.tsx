// Research section - academic publications
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

const publications = [
    {
        id: 1,
        title: 'Advanced Deepfake Image Detection: A Robust Framework using InceptionV3 and Xception',
        venue: 'i-manager\'s Journal on Image Processing',
        year: '2025',
        description: 'CNN-based deepfake image detection using transfer learning with Xception and InceptionV3.',
        type: 'journal',
        links: {
            certificate: '#',
        },
    },
    {
        id: 2,
        title: 'Comprehensive Deepfake Detection: A Comparative Study on Image and Video Forgery',
        venue: '8th IEEE Pune Section International Conference (PUNECON 2025)',
        year: '2025',
        description: 'Comparative analysis of image and video-based deepfake detection techniques.',
        type: 'conference',
        links: {
            ieee: '#',
        },
    },
];

export default function ResearchSection() {
    return (
        <section id="research" className="py-32 relative">
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
                        title="Research"
                        subtitle="Academic publications and conference papers"
                        gradient
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    {publications.map((pub) => (
                        <motion.article
                            key={pub.id}
                            variants={fadeInUp}
                            className="group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                        >
                            {/* Publication badge */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${pub.type === 'journal'
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                    }`}>
                                    {pub.type === 'journal' ? 'Journal' : 'IEEE Conference'}
                                </span>
                                <span className="text-sm text-white/40">{pub.year}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                                {pub.title}
                            </h3>

                            {/* Venue */}
                            <p className="text-sm text-violet-400 font-medium mb-3">
                                {pub.venue}
                            </p>

                            {/* Description */}
                            <p className="text-white/50 leading-relaxed mb-5">
                                {pub.description}
                            </p>

                            {/* Action buttons */}
                            <div className="flex gap-3">
                                {pub.links.certificate && (
                                    <a
                                        href={pub.links.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Certificate
                                    </a>
                                )}
                                {pub.links.ieee && (
                                    <a
                                        href={pub.links.ieee}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                        IEEE
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
