// Achievements section - professional with event images
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

const achievements = [
    {
        id: 1,
        title: 'National Winner (Top 15)',
        event: 'SBI Youth Ideathon 2025, IIT Delhi',
        description: 'Selected among 15,000+ teams to present Truth Shield. Awarded ₹20,000 for AI innovation.',
        image: '/images/achievements/iit-delhi.jpg',
        link: 'https://www.linkedin.com/posts/prakhar-shukla-471649261_sbiyouthideathon-iitdelhi-innovation-activity-7319012052360908800-YE3h',
        linkType: 'linkedin',
    },
    {
        id: 2,
        title: 'National Innovation Finalist',
        event: 'Azim Premji University & BITS Pilani Hyderabad',
        description: 'Finalist at Azim Premji University (Social Enterprise Challenge) and Top 20 at BITS Pilani Hyderabad (Beyond Profits) for AI-driven security innovation.',
        image: '/images/achievements/azim-premji.png',
        link: 'https://www.linkedin.com/posts/prakhar-shukla-471649261_socialenterprise-aiforgood-deepfakedetection-activity-7401299561245356032-3YLX',
        linkType: 'linkedin',
    },
    {
        id: 3,
        title: '1st Runner-Up',
        event: 'Hack Wack 2.0 (2025)',
        description: 'Secured 2nd rank among 300+ participants; won ₹8,000 for real-time deepfake detection.',
        image: '/images/achievements/hack-wack.jpg',
        link: null,
        linkType: null,
    },
    {
        id: 4,
        title: '1st Runner-Up',
        event: 'HackAIthon',
        description: 'Organized by Azure Developer Community & Reskilll for applied AI problem-solving.',
        image: '/images/achievements/hackalthon.png',
        link: null,
        linkType: null,
    },
];

export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-32">
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="Achievements"
                        subtitle="Recognition and milestones along the journey"
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
                    {achievements.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] overflow-hidden transition-colors"
                        >
                            {/* Event Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={achievement.image}
                                    alt={achievement.event}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {achievement.title}
                                </h3>

                                {/* Event */}
                                <p className="text-sm text-violet-400 font-medium mb-3">
                                    {achievement.event}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-white/50 leading-relaxed mb-4">
                                    {achievement.description}
                                </p>

                                {/* LinkedIn Link (only if exists) */}
                                {achievement.link && achievement.linkType === 'linkedin' && (
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        View Post
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
