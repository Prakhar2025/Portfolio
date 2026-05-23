// Header — glass pill nav with PS monogram, active section tracking
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui';

const navLinks = [
    { label: 'Work',         href: '#work' },
    { label: 'Experience',   href: '#experience' },
    { label: 'Research',     href: '#research' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'About',        href: '#about' },
    { label: 'Contact',      href: '#contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen]     = useState(false);
    const [active, setActive]     = useState('');

    // Scroll detection
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Active section via IntersectionObserver
    useEffect(() => {
        const ids = navLinks.map(l => l.href.replace('#', ''));
        const observers = ids.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { threshold: 0.3 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(o => o?.disconnect());
    }, []);

    const handleNav = useCallback((href: string) => {
        setIsOpen(false);
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="fixed top-0 z-50 w-full"
        >
            {/* Glass bar */}
            <div
                className="mx-auto transition-all duration-500"
                style={{
                    background: scrolled
                        ? 'rgba(5,5,8,0.85)'
                        : 'transparent',
                    backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
                }}
            >
                <Container>
                    <nav className="flex h-16 items-center justify-between">

                        {/* ── PS Monogram ── */}
                        <motion.a
                            href="#home"
                            onClick={() => handleNav('#home')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex items-center justify-center w-9 h-9 rounded-xl font-black text-sm"
                            style={{
                                background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
                                color: '#fff',
                                letterSpacing: '-0.05em',
                            }}
                            title="Prakhar Shukla"
                        >
                            PS
                        </motion.a>

                        {/* ── Desktop Nav — pill style ── */}
                        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.07)',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            {navLinks.map((link, i) => {
                                const id = link.href.replace('#', '');
                                const isActive = active === id;
                                return (
                                    <motion.button
                                        key={link.href}
                                        onClick={() => handleNav(link.href)}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * i + 0.3 }}
                                        className="relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200"
                                        style={{
                                            color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                                        }}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-active-pill"
                                                className="absolute inset-0 rounded-full"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(124,58,237,0.6), rgba(99,102,241,0.6))',
                                                }}
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.label}</span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* ── Resume CTA ── */}
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full transition-all"
                            style={{
                                background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
                                color: '#fff',
                            }}
                        >
                            Resume
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </motion.a>

                        {/* ── Mobile hamburger ── */}
                        <button
                            onClick={() => setIsOpen(v => !v)}
                            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                            aria-label="Toggle menu"
                        >
                            {[0, 1, 2].map(i => (
                                <motion.span
                                    key={i}
                                    animate={
                                        isOpen
                                            ? i === 0 ? { rotate: 45, y: 6 }
                                            : i === 1 ? { opacity: 0, scaleX: 0 }
                                            : { rotate: -45, y: -6 }
                                            : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                                    }
                                    className="block h-px bg-white origin-center"
                                    style={{ width: i === 1 ? '16px' : '20px' }}
                                />
                            ))}
                        </button>
                    </nav>
                </Container>
            </div>

            {/* ── Mobile menu ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 w-full md:hidden"
                        style={{
                            background: 'rgba(5,5,8,0.96)',
                            backdropFilter: 'blur(24px)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                        }}
                    >
                        <Container>
                            <ul className="py-6 space-y-0.5">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                    >
                                        <button
                                            onClick={() => handleNav(link.href)}
                                            className="block w-full text-left py-3 text-base text-white/60 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </button>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.04 }}
                                >
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className="block py-3 text-base font-medium"
                                        style={{ color: '#a78bfa' }}
                                    >
                                        Resume ↗
                                    </a>
                                </motion.li>
                            </ul>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
