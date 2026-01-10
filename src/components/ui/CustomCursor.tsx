// Custom cursor with trail effect
'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TRAIL_LENGTH = 8;

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
    const trailRef = useRef<{ x: number; y: number }[]>([]);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const onMouseMove = useCallback((e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);

        // Update trail
        trailRef.current = [
            { x: e.clientX, y: e.clientY },
            ...trailRef.current.slice(0, TRAIL_LENGTH - 1)
        ];
        setTrail([...trailRef.current]);
    }, [cursorX, cursorY]);

    const onMouseEnter = useCallback(() => setIsHidden(false), []);
    const onMouseLeave = useCallback(() => setIsHidden(true), []);

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);

        // Track hoverable elements
        const hoverables = document.querySelectorAll('a, button, [data-cursor-hover]');

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);

            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, [onMouseMove, onMouseEnter, onMouseLeave]);

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Cursor trail */}
            {trail.map((point, index) => (
                <motion.div
                    key={index}
                    className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] bg-violet-500/30"
                    style={{
                        x: point.x,
                        y: point.y,
                        translateX: '-50%',
                        translateY: '-50%',
                        width: 8 - index * 0.8,
                        height: 8 - index * 0.8,
                        opacity: isHidden ? 0 : (1 - index / TRAIL_LENGTH) * 0.4,
                    }}
                />
            ))}

            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isHidden ? 0 : 1,
                }}
            />

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-white/50 mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isHidden ? 0 : 1,
                }}
                animate={{
                    width: isHovering ? 60 : 40,
                    height: isHovering ? 60 : 40,
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
