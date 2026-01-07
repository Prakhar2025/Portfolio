// 3D tilt card with glow border effect
'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export default function TiltCard({
    children,
    className,
    glowColor = 'rgba(139, 92, 246, 0.4)',
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const rotateXValue = (y - 0.5) * -15;
        const rotateYValue = (x - 0.5) * 15;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            animate={{
                rotateX,
                rotateY,
                scale: isHovered ? 1.02 : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
            className={cn(
                'relative rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden',
                className
            )}
        >
            {/* Gradient border glow */}
            <motion.div
                className="absolute -inset-px rounded-2xl opacity-0 pointer-events-none"
                style={{
                    background: `linear-gradient(135deg, ${glowColor}, transparent 50%, ${glowColor})`,
                }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Inner content */}
            <div
                className="relative z-10 h-full"
                style={{ transform: 'translateZ(20px)' }}
            >
                {children}
            </div>

            {/* Shine effect */}
            <motion.div
                className="absolute inset-0 opacity-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)',
                }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? '100%' : '-100%',
                }}
                transition={{ duration: 0.6 }}
            />
        </motion.div>
    );
}
