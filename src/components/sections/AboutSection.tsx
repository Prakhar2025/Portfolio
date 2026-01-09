// About section with professional bio and profile photo
'use client';

import Image from 'next/image';
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

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Profile Photo */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="relative aspect-square max-w-md mx-auto lg:mx-0"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-violet-500/20 rounded-2xl blur-xl" />

                        {/* Image container */}
                        <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                            <Image
                                src="/images/profile.jpg"
                                alt="Prakhar Shukla"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-violet-500/10 blur-2xl -z-10"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-fuchsia-500/10 blur-2xl -z-10"
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
                            I&apos;m a software engineer focused on building real-world systems across full-stack development and applied AI. I enjoy working end-to-end — from designing clean interfaces and APIs to implementing machine learning models that solve practical problems.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed">
                            My work spans AI-powered SaaS platforms, deepfake detection systems, NLP applications, and mobile apps, with an emphasis on production-ready code and thoughtful architecture.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Shipped multiple production-ready web, AI, and mobile systems. Currently, I&apos;m building and learning by shipping projects, contributing to client work, and continuously improving my engineering depth across software and AI.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                            {[
                                { value: '1+', label: 'Years Experience' },
                                { value: '10+', label: 'Projects Built' },
                                { value: '4', label: 'Live Deployments' },
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
