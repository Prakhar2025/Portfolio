// Magnetic button with hover attraction effect
'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    external?: boolean;
}

export default function MagneticButton({
    children,
    className,
    onClick,
    href,
    variant = 'primary',
    size = 'md',
    external = false,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = (clientX - left - width / 2) * 0.3;
        const y = (clientY - top - height / 2) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseStyles = cn(
        'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden',
        {
            // Variants
            'bg-white text-black hover:bg-white/90': variant === 'primary',
            'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30': variant === 'secondary',
            'text-white/70 hover:text-white': variant === 'ghost',
            // Sizes
            'h-10 px-5 text-sm': size === 'sm',
            'h-12 px-6 text-sm': size === 'md',
            'h-14 px-8 text-base': size === 'lg',
        },
        className
    );

    const Component = href ? 'a' : 'button';

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
            className="inline-block"
        >
            <Component
                href={href}
                onClick={onClick}
                className={baseStyles}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
            >
                <motion.span
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {children}
                </motion.span>

                {/* Glow effect on hover */}
                {variant === 'primary' && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </Component>
        </motion.div>
    );
}
