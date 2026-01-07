// Fixed navigation header with section links
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { navLinks } from '@/data/navigation';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
            <Container>
                <nav className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-neutral-900">
                        Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isOpen && (
                    <ul className="border-t border-neutral-200 py-4 md:hidden">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </Container>
        </header>
    );
}
