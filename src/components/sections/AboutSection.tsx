// About me section with bio and personal details
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container, SectionHeading } from '@/components/ui';
import { personalInfo } from '@/data/personal';

export default function AboutSection() {
    return (
        <section id="about" className="bg-neutral-50 py-24">
            <Container>
                <SectionHeading title="About Me" />
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative aspect-square overflow-hidden rounded-lg bg-neutral-200"
                    >
                        <Image
                            src={personalInfo.avatar}
                            alt={personalInfo.name}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="prose prose-neutral max-w-none">
                            {personalInfo.bio.map((paragraph, index) => (
                                <p key={index} className="text-neutral-600">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <ul className="mt-8 space-y-2">
                            <li className="flex items-center gap-2 text-neutral-600">
                                <span className="font-medium text-neutral-900">Location:</span>
                                {personalInfo.location}
                            </li>
                            <li className="flex items-center gap-2 text-neutral-600">
                                <span className="font-medium text-neutral-900">Email:</span>
                                {personalInfo.email}
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
