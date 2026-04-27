// Skills section with staggered reveal animations
'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui';
import { fadeInUp, staggerContainer, staggerFast, defaultViewport } from '@/lib/animations';

const skillCategories = [
    {
        name: 'Languages',
        skills: ['C++', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'],
    },
    {
        name: 'Web & Mobile Development',
        skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'React Native (Expo)', 'REST APIs', 'OpenAPI / Swagger', 'JWT Auth'],
    },
    {
        name: 'AI & GenAI',
        skills: ['LLM Workflows', 'Prompt Engineering', 'Agentic AI', 'RAG', 'Embeddings', 'Amazon Bedrock', 'GROQ AI', 'AI Tool Orchestration', 'NLP', 'Computer Vision', 'TensorFlow', 'OpenCV'],
    },
    {
        name: 'Cloud, Databases & DevOps',
        skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Amazon Bedrock', 'AWS SAM', 'CloudFormation', 'Vercel', 'Render', 'Firebase', 'PostgreSQL', 'MongoDB', 'Supabase', 'Clerk Auth', 'Git', 'GitHub', 'CI/CD'],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-950/5 to-transparent pointer-events-none" />

            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                >
                    <SectionHeading
                        title="Skills & Technologies"
                        subtitle="The tools and technologies I use to bring ideas to life"
                        gradient
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="grid gap-8 sm:grid-cols-2"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.name}
                            variants={fadeInUp}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">{category.name}</h3>
                            <motion.div
                                variants={staggerFast}
                                initial="hidden"
                                whileInView="visible"
                                viewport={defaultViewport}
                                className="flex flex-wrap gap-2"
                            >
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: {
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.3 }
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                        }}
                                        className="px-4 py-2 text-sm text-white/70 bg-white/5 rounded-full border border-white/10 cursor-default transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
