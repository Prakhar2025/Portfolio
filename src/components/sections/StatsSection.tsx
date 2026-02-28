// Stats section with animated counters and live GitHub data
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Container } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

interface GitHubStats {
    totalCommits: number;
    totalRepos: number;
    totalStars: number;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

export default function StatsSection() {
    const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/github-stats')
            .then(res => res.json())
            .then(data => {
                setGithubStats(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching GitHub stats:', error);
                setLoading(false);
            });
    }, []);

    const stats = [
        {
            id: 1,
            label: 'Years Experience',
            value: 1,
            suffix: '+',
            description: 'Building innovative solutions',
        },
        {
            id: 2,
            label: 'Projects Completed',
            value: 15,
            suffix: '+',
            description: 'Across web, mobile & AI',
        },
        {
            id: 3,
            label: 'GitHub Commits',
            value: githubStats?.totalCommits || 306,
            suffix: '',
            description: 'Total contributions',
        },
        {
            id: 4,
            label: 'Research Papers',
            value: 2,
            suffix: '',
            description: 'Published & presented',
        },
    ];

    return (
        <section className="py-20 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-transparent pointer-events-none" />

            <Container>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={fadeInUp}
                            className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                        >
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                                {loading && stat.id === 3 ? (
                                    <span className="animate-pulse">...</span>
                                ) : (
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                )}
                            </div>
                            <div className="text-white font-medium mb-1">{stat.label}</div>
                            <div className="text-sm text-white/40">{stat.description}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
