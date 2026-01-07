// Minimal dark theme footer
'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { fadeInUp, defaultViewport } from '@/lib/animations';

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/50">
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="py-12 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} Portfolio. Built with precision.
                    </p>

                    <ul className="flex items-center gap-6">
                        {socialLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </Container>
        </footer>
    );
}
