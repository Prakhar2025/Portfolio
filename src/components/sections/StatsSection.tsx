// Stats section — horizontal scrolling marquee ticker with live GitHub data
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Container } from '@/components/ui';

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
        const end = value;
        const duration = 1800;
        const increment = end / (duration / 16);
        let start = 0;
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, value]);

    return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

export default function StatsSection() {
    const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/github-stats')
            .then(res => res.json())
            .then(data => { setGithubStats(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    const stats = [
        { icon: '⚡', label: 'Years Building', value: 1, suffix: '+' },
        { icon: '🚀', label: 'Projects Shipped', value: 10, suffix: '+' },
        { icon: '📡', label: 'GitHub Commits', value: githubStats?.totalCommits || 306, suffix: '' },
        { icon: '🔬', label: 'Research Papers', value: 2, suffix: '' },
        { icon: '🏆', label: 'Hackathon Awards', value: 5, suffix: '+' },
        { icon: '🌐', label: 'Live Deployments', value: 8, suffix: '+' },
    ];

    // Duplicate for seamless loop
    const ticker = [...stats, ...stats];

    return (
        <section className="relative py-12 overflow-hidden">
            {/* Top / bottom lines */}
            <div className="section-divider mb-0" />

            {/* Background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.04), transparent)' }}
            />

            {/* Marquee strip */}
            <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
                <div className="flex items-center animate-marquee whitespace-nowrap gap-0">
                    {ticker.map((stat, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-6 px-10"
                        >
                            {/* Stat */}
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{stat.icon}</span>
                                <div>
                                    <div className="text-2xl font-black text-gradient-violet tabular-nums">
                                        {loading && stat.label === 'GitHub Commits'
                                            ? <span className="animate-pulse text-white/20">···</span>
                                            : <Counter value={stat.value} suffix={stat.suffix} />
                                        }
                                    </div>
                                    <div className="text-xs text-white/30 font-medium mono">{stat.label}</div>
                                </div>
                            </div>
                            {/* Separator */}
                            <div className="w-px h-8 bg-white/10" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-divider mt-0" />
        </section>
    );
}
