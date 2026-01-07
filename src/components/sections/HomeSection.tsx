// Hero section with intro, tagline, and CTA
'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { personalInfo } from '@/data/personal';

export default function HomeSection() {
    return (
        <section id="home" className="flex min-h-screen items-center pt-16">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
                        {personalInfo.greeting}
                    </p>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
                        {personalInfo.name}
                    </h1>
                    <p className="mt-2 text-2xl font-medium text-neutral-700 sm:text-3xl">
                        {personalInfo.title}
                    </p>
                    <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                        {personalInfo.tagline}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#work">
                            <Button size="lg">View Work</Button>
                        </a>
                        <a href="#contact">
                            <Button variant="outline" size="lg">Get in Touch</Button>
                        </a>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
