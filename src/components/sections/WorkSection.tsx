// Projects/work showcase grid
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container, SectionHeading } from '@/components/ui';
import { projects } from '@/data/projects';

export default function WorkSection() {
    return (
        <section id="work" className="py-24">
            <Container>
                <SectionHeading
                    title="Selected Work"
                    subtitle="A collection of projects I've built and contributed to"
                />
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group overflow-hidden rounded-lg border border-neutral-200 bg-white"
                        >
                            <div className="relative aspect-video overflow-hidden bg-neutral-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-neutral-900">{project.title}</h3>
                                <p className="mt-2 text-neutral-600">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
