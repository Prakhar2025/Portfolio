// Achievements section - professional with event images
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

const achievements = [
    {
        id: 1,
        title: 'Global Top 50 Finalist',
        event: 'AWS AIdeas Championship — Amazon Web Services',
        description: 'Selected from thousands of global entries as a Top 50 Finalist for engineering TruthLayer — a serverless enterprise AI hallucination firewall — recognized in the official AWS Builder publication.',
        image: '/images/achievements/aws-aideas.png',
        link: 'https://www.linkedin.com/posts/prakhar-shukla-471649261_aws-serverless-amazonbedrock-ugcPost-7452726366786985985-NDll',
        linkType: 'linkedin',
        awsLink: 'https://builder.aws.com/content/3AiVAgV9sh4C2Si39FRcUVmT5H4/aideas-finalist-truthlayer-the-five-signal-ai-verification-engine',
    },
    {
        id: 2,
        title: 'Top 200 AI Teams (Top 2%)',
        event: 'India AI Impact Buildathon 2026 — Grand Finale, Bharat Mandapam, New Delhi',
        description: 'Selected among Top 200 AI teams from 40,000+ AI builders across India for the Grand Finale at the India AI Impact Summit 2026, Bharat Mandapam, New Delhi. Powered by HCL GUVI.',
        image: '/images/achievements/hclguvi.jpeg',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7428490256519262209/',
        linkType: 'linkedin',
    },
    {
        id: 3,
        title: 'National Winner (Top 15)',
        event: 'SBI Youth Ideathon 2025, IIT Delhi',
        description: 'Selected among 15,000+ teams to present Truth Shield. Awarded ₹20,000 for AI innovation.',
        image: '/images/achievements/iit-delhi.jpg',
        link: 'https://www.linkedin.com/posts/prakhar-shukla-471649261_sbiyouthideathon-iitdelhi-innovation-activity-7319012052360908800-YE3h',
        linkType: 'linkedin',
    },
    {
        id: 4,
        title: 'National Innovation Finalist',
        event: 'Azim Premji University & BITS Pilani Hyderabad',
        description: 'Finalist at Azim Premji University (Social Enterprise Challenge) and Top 20 at BITS Pilani Hyderabad (Beyond Profits) for AI-driven security innovation.',
        image: '/images/achievements/azim-premji.png',
        link: 'https://www.linkedin.com/posts/prakhar-shukla-471649261_socialenterprise-aiforgood-deepfakedetection-activity-7401299561245356032-3YLX',
        linkType: 'linkedin',
    },
    {
        id: 5,
        title: '1st Runner-Up',
        event: 'Hack Wack 2.0 (2025)',
        description: 'Secured 2nd rank among 300+ participants; won ₹8,000 for real-time deepfake detection.',
        image: '/images/achievements/hack-wack.jpg',
        link: null,
        linkType: null,
    },
    {
        id: 6,
        title: '1st Runner-Up',
        event: 'HackAIthon',
        description: 'Organized by Azure Developer Community & Reskilll for applied AI problem-solving.',
        image: '/images/achievements/hackalthon.png',
        link: null,
        linkType: null,
    },
];

export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-32">
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="Achievements"
                        subtitle="Recognition and milestones along the journey"
                        gradient
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {achievements.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] overflow-hidden transition-colors"
                        >
                            {/* Event Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={achievement.image}
                                    alt={achievement.event}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {achievement.title}
                                </h3>

                                {/* Event */}
                                <p className="text-sm text-violet-400 font-medium mb-3">
                                    {achievement.event}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-white/50 leading-relaxed mb-4">
                                    {achievement.description}
                                </p>

                                {/* Links */}
                                <div className="flex flex-wrap gap-4">
                                    {achievement.link && achievement.linkType === 'linkedin' && (
                                        <a
                                            href={achievement.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            View Post
                                        </a>
                                    )}
                                    {'awsLink' in achievement && achievement.awsLink && (
                                        <a
                                            href={achievement.awsLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-orange-400/80 hover:text-orange-300 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.070.223-.256.152-.384.384-.384.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
                                            </svg>
                                            AWS Publication
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
