// Hero section with animated role text and gradient background
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, MagneticButton } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const roles = [
    'Software Engineer',
    'AI / ML Engineer',
    'SaaS Builder',
];

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10">
                {/* Main gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black" />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-600/15 blur-[100px]"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                    }}
                />
            </div>

            <Container>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6"
                    >
                        Hello, I&apos;m
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-4"
                    >
                        Prakhar Shukla
                    </motion.h1>

                    {/* Animated Role */}
                    <motion.div
                        variants={fadeInUp}
                        className="h-16 sm:h-20 lg:h-24 mb-8 overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIndex}
                                initial={{ y: 60, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -60, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                                className="block text-3xl sm:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg sm:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
                    >
                        Building exceptional digital experiences with modern technologies.
                        Turning complex problems into elegant solutions.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap gap-4"
                    >
                        <MagneticButton href="#work" variant="primary" size="lg">
                            View Work
                        </MagneticButton>
                        <MagneticButton href="#contact" variant="secondary" size="lg">
                            Get in Touch
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 rounded-full bg-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
