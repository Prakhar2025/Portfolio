// About section with professional bio
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { fadeInUp, fadeInLeft, fadeInRight, defaultViewport } from '@/lib/animations';

export default function AboutSection() {
    return (
        <section id="about" className="py-32 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="About Me"
                        gradient
                    />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image placeholder */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="relative aspect-square max-w-md mx-auto lg:mx-0"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20" />
                        <div className="absolute inset-2 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                            <span className="text-6xl">👨‍💻</span>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-violet-500/10 blur-2xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-fuchsia-500/10 blur-2xl"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="space-y-6"
                    >
                        <p className="text-lg text-white/70 leading-relaxed">
                            I&apos;m a software engineer passionate about building products that solve real problems.
                            With expertise spanning full-stack development, AI/ML, and cloud infrastructure,
                            I bring ideas from concept to production.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Currently focused on building AI-powered SaaS products and contributing to
                            open-source tools. I believe in clean code, thoughtful architecture,
                            and continuous learning.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed">
                            When not coding, you&apos;ll find me exploring new technologies, mentoring developers,
                            or working on my next startup idea.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                            {[
                                { value: '5+', label: 'Years Experience' },
                                { value: '50+', label: 'Projects Shipped' },
                                { value: '10K+', label: 'GitHub Stars' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-white/40">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
