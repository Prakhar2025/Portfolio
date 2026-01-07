// Contact section with form and social links
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading, MagneticButton } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 via-transparent to-transparent pointer-events-none" />

            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="Get in Touch"
                        subtitle="Have a project in mind? Let's build something great together."
                        gradient
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="max-w-2xl mx-auto"
                >
                    {/* Contact form */}
                    <motion.form
                        variants={fadeInUp}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-colors resize-none"
                            />
                        </div>

                        <MagneticButton variant="primary" size="lg">
                            Send Message
                        </MagneticButton>
                    </motion.form>

                    {/* Divider */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex items-center gap-4 my-12"
                    >
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-sm text-white/30">or connect with me</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex justify-center gap-6"
                    >
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Email */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-center mt-8 text-white/40"
                    >
                        Or email me at{' '}
                        <a
                            href="mailto:hello@example.com"
                            className="text-white/70 hover:text-white transition-colors underline underline-offset-4"
                        >
                            hello@example.com
                        </a>
                    </motion.p>
                </motion.div>
            </Container>
        </section>
    );
}
