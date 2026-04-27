// Projects section with tilt cards and hover effects
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading, TiltCard, MagneticButton } from '@/components/ui';
import { fadeInUp, staggerContainer, defaultViewport } from '@/lib/animations';

const projects = [
    {
        id: 1,
        title: 'TruthLayer — AI Hallucination Firewall',
        description: 'AWS AIdeas Top 50 Global Finalist (10,000+ submissions). Serverless 5-signal deterministic engine that intercepts LLM hallucinations before they reach users. 95.33% precision on 300 adversarial cases. $1.50/month for 50K verifications.',
        tech: ['Amazon Bedrock', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'AWS SAM', 'Python', 'Next.js', 'TypeScript'],
        live: 'https://truth-layer.vercel.app/',
        github: 'https://github.com/Prakhar2025/TruthLayer',
        aws: 'https://builder.aws.com/content/3AiVAgV9sh4C2Si39FRcUVmT5H4/aideas-finalist-truthlayer-the-five-signal-ai-verification-engine',
    },
    {
        id: 2,
        title: 'ScamShield — AI Scam Intelligence Platform',
        description: 'Agentic AI honeypot that autonomously engages scammers using adaptive LLM personas, extracts intelligence (UPI IDs, bank details, phone numbers) with 98% accuracy, and serves real-time analytics across 13+ REST APIs.',
        tech: ['Next.js 14', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'GROQ AI', 'Vercel', 'Render'],
        live: 'https://scamshield-honeypot.vercel.app/',
        github: 'https://github.com/Prakhar2025',
        api: 'https://scamshield-honeypot.onrender.com/docs',
    },
    {
        id: 3,
        title: 'EthAum AI — AI-Powered SaaS Marketplace',
        description: 'Full-stack SaaS marketplace with AI credibility scoring, sentiment analysis, and smart recommendations. 50+ API endpoints with admin dashboard.',
        tech: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'Clerk', 'AI'],
        live: 'https://ethaumai.vercel.app',
        github: 'https://github.com/Prakhar2025/EthAum-Venture-Partners',
        api: 'https://ethaum-venture-partners.onrender.com/docs',
    },
    {
        id: 4,
        title: 'Canvas AI — AI-Powered Generative Workspace',
        description: 'AI-native workspace that builds interfaces from natural language. Speak or type what you need, and the AI dynamically renders the right components — project boards, charts, timelines, and more.',
        tech: ['Next.js', 'TypeScript', 'React', 'Tambo AI', 'Framer Motion', 'Tailwind CSS', 'MCP'],
        live: 'https://canvas-ai-nu.vercel.app/',
        github: 'https://github.com/Prakhar2025/canvas.ai',
    },
    {
        id: 5,
        title: 'Truth Shield — Deepfake Detection System',
        description: 'AI-powered system for detecting manipulated images and videos.',
        tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'CNN-LSTM'],
        live: 'https://truthshieldai.vercel.app/',
        github: 'https://github.com/Prakhar2025/Truth-Shield',
    },
    {
        id: 6,
        title: 'NLP Legal Compliance System',
        description: 'Automated contract analysis platform for legal risk and compliance detection.',
        tech: ['JavaScript', 'Node.js', 'NLP', 'React', 'REST APIs'],
        live: 'https://legal-compliance-monitor.netlify.app/',
        github: 'https://github.com/Prakhar2025/NLP-Legal-Compilance-System',
    },
    {
        id: 7,
        title: 'LearnSphere — Secure Mobile Learning Platform',
        description: 'Cross-platform LMS featuring a custom chromeless video engine and scalable backend for premium content delivery.',
        tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Firebase', 'Redux'],
        live: '',
        github: 'https://github.com/Prakhar2025/course',
    },
];

export default function WorkSection() {
    return (
        <section id="work" className="py-32 relative">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="Selected Work"
                        subtitle="Projects that showcase my expertise in building scalable solutions"
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
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={fadeInUp}>
                            <TiltCard className="h-full" glowColor="rgba(139, 92, 246, 0.3)">
                                <div className="p-6 sm:p-8 flex flex-col h-full">
                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white/50 mb-6 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 rounded-full border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        {project.live && (
                                            <MagneticButton
                                                href={project.live}
                                                variant="secondary"
                                                size="sm"
                                                external
                                            >
                                                <span className="flex items-center gap-2">
                                                    Live
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </span>
                                            </MagneticButton>
                                        )}
                                        {'aws' in project && project.aws && (
                                            <MagneticButton
                                                href={project.aws}
                                                variant="secondary"
                                                size="sm"
                                                external
                                            >
                                                <span className="flex items-center gap-2">
                                                    AWS Article
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.070.223-.256.152-.384.384-.384.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
                                                    </svg>
                                                </span>
                                            </MagneticButton>
                                        )}
                                        {'api' in project && project.api && (
                                            <MagneticButton
                                                href={project.api}
                                                variant="secondary"
                                                size="sm"
                                                external
                                            >
                                                <span className="flex items-center gap-2">
                                                    API Docs
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </span>
                                            </MagneticButton>
                                        )}
                                        <MagneticButton
                                            href={project.github}
                                            variant="ghost"
                                            size="sm"
                                            external
                                        >
                                            <span className="flex items-center gap-2">
                                                GitHub
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
