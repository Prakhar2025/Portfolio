// Page load intro animation
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user has visited before in this session
        const hasVisited = sessionStorage.getItem('hasVisited');

        if (hasVisited) {
            setIsLoading(false);
            return;
        }

        // Show intro animation for new visitors
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('hasVisited', 'true');
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] dark:bg-[#0a0a0a]"
                >
                    <div className="text-center">
                        {/* Animated logo/name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-6"
                        >
                            <motion.h1
                                className="text-4xl md:text-5xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                Prakhar Shukla
                            </motion.h1>
                            <motion.p
                                className="text-white/50 mt-2 text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Software Engineer
                            </motion.p>
                        </motion.div>

                        {/* Loading bar */}
                        <motion.div
                            className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.9, duration: 1.4, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
