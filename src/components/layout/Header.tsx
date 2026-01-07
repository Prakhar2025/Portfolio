// Sticky animated navbar with scroll detection
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui';
import { navAnimation } from '@/lib/animations';

const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            variants={navAnimation}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled
                    ? 'bg-black/50 backdrop-blur-xl border-b border-white/5'
                    : 'bg-transparent'
                }`}
        >
            <Container>
                <nav className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-xl font-bold text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Portfolio
                    </motion.a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, i) => (
                            <motion.li
                                key={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                            >
                                <a
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm text-white/70 transition-colors hover:text-white group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 flex flex-col gap-1.5 md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 6 : 0
                            }}
                            className="w-6 h-px bg-white origin-center"
                        />
                        <motion.span
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            className="w-6 h-px bg-white"
                        />
                        <motion.span
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -6 : 0
                            }}
                            className="w-6 h-px bg-white origin-center"
                        />
                    </button>
                </nav>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 md:hidden"
                    >
                        <Container>
                            <ul className="py-6 space-y-1">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block py-3 text-lg text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
