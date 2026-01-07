// Achievements, awards, and certifications section
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { achievements } from '@/data/achievements';

export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-24">
            <Container>
                <SectionHeading
                    title="Achievements"
                    subtitle="Recognition and milestones in my journey"
                />
                <div className="grid gap-6 md:grid-cols-2">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-6"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                                <span className="text-xl">{achievement.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900">{achievement.title}</h3>
                                <p className="mt-1 text-sm text-neutral-500">{achievement.year}</p>
                                <p className="mt-2 text-neutral-600">{achievement.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
