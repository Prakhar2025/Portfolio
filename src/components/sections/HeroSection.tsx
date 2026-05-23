// Hero section — premium redesign with aurora, noise texture, char reveal
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Container, MagneticButton } from '@/components/ui';

const roles = [
    'Full-Stack Engineer',
    'AI Systems Builder',
    'Cloud & Serverless Dev',
    'SaaS Architect',
];

const badges = [
    { icon: '🏆', text: 'AWS AIdeas Global Top 50' },
    { icon: '🔥', text: 'IBM Bob Hackathon Builder' },
    { icon: '🇮🇳', text: 'Top 2% India AI Buildathon' },
];

const NAME = 'Prakhar Shukla';

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [badgeIndex, setBadgeIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    // Mouse-tracking for subtle parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        setMounted(true);
        const roleInterval = setInterval(() => {
            setRoleIndex(prev => (prev + 1) % roles.length);
        }, 3200);
        const badgeInterval = setInterval(() => {
            setBadgeIndex(prev => (prev + 1) % badges.length);
        }, 2800);
        return () => { clearInterval(roleInterval); clearInterval(badgeInterval); };
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 30);
        mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 20);
    };

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* ── Deep background ── */}
            <div className="absolute inset-0 -z-20" style={{ background: 'var(--bg-base)' }} />

            {/* ── Aurora orbs (parallax) ── */}
            <motion.div
                className="absolute -z-10 pointer-events-none"
                style={{ x: springX, y: springY }}
            >
                {/* Top-left large orb */}
                <div className="absolute -top-20 -left-40 w-[700px] h-[700px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #7c3aed 0%, #6366f1 40%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                {/* Bottom-right orb */}
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, #d946ef 0%, #7c3aed 50%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                />
                {/* Center accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
            </motion.div>

            {/* ── Dot-grid overlay ── */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* ── Diagonal lines ── */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 60px)',
                }}
            />

            <Container>
                <div className="max-w-5xl">

                    {/* ── Floating achievement badge ── */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8 inline-flex"
                    >
                        <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full"
                            style={{
                                background: 'rgba(124,58,237,0.1)',
                                border: '1px solid rgba(124,58,237,0.3)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {/* Animated ring */}
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                            </span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={badgeIndex}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xs font-medium text-violet-300 mono"
                                >
                                    {badges[badgeIndex].icon} {badges[badgeIndex].text}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* ── Name — character reveal ── */}
                    <motion.h1
                        className="font-black tracking-tight mb-4 leading-none"
                        style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
                    >
                        {mounted && NAME.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{
                                    delay: 0.4 + i * 0.04,
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={char === ' ' ? 'inline-block w-[0.3em]' : 'inline-block'}
                                style={{
                                    background: i < 7
                                        ? 'linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.7) 100%)'
                                        : 'linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #c084fc 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* ── Animated role ── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-center gap-3 mb-8 h-10"
                    >
                        <span className="mono text-white/30 text-sm">~/role</span>
                        <span className="text-white/20 text-sm">→</span>
                        <div className="overflow-hidden h-8 flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ y: 32, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -32, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="block text-xl sm:text-2xl font-semibold text-gradient-violet"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* ── Tagline ── */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                        className="text-base sm:text-lg text-white/40 max-w-xl mb-12 leading-relaxed"
                    >
                        Building AI-native systems, serverless infrastructure, and full-stack products
                        that ship to production — not just demos.
                    </motion.p>

                    {/* ── CTAs ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                        className="flex flex-wrap gap-4 mb-16"
                    >
                        <MagneticButton href="#work" variant="primary" size="lg">
                            <span className="flex items-center gap-2">
                                View Projects
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </MagneticButton>
                        <MagneticButton href="/resume.pdf" variant="secondary" size="lg" external>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Resume
                            </span>
                        </MagneticButton>
                        <MagneticButton href="#contact" variant="ghost" size="lg">
                            Get in Touch
                        </MagneticButton>
                    </motion.div>

                    {/* ── Quick stat pills ── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.9 }}
                        className="flex flex-wrap gap-3"
                    >
                        {[
                            { n: '10+', label: 'Projects shipped' },
                            { n: '2', label: 'Research papers' },
                            { n: '5+', label: 'Hackathon awards' },
                            { n: '8+', label: 'Live deployments' },
                        ].map(({ n, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                }}
                            >
                                <span className="text-sm font-bold text-white">{n}</span>
                                <span className="text-xs text-white/35">{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="mono text-white/20 text-xs">scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                >
                    <div className="w-0.5 h-2 rounded-full bg-white/30" />
                </motion.div>
            </motion.div>
        </section>
    );
}
