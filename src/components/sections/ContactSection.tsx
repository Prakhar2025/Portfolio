// Contact form and information section
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading, Button } from '@/components/ui';
import { personalInfo } from '@/data/personal';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24">
            <Container>
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Have a project in mind? Let's talk."
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-xl"
                >
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="mt-1 block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                            Send Message
                        </Button>
                    </form>
                    <p className="mt-8 text-center text-sm text-neutral-500">
                        Or email me directly at{' '}
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="font-medium text-neutral-900 hover:underline"
                        >
                            {personalInfo.email}
                        </a>
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
