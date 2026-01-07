// Skills/technologies section organized by category
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
    return (
        <section id="skills" className="bg-neutral-50 py-24">
            <Container>
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="Tools and technologies I work with"
                />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-lg border border-neutral-200 bg-white p-6"
                        >
                            <h3 className="text-lg font-semibold text-neutral-900">{category.name}</h3>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
