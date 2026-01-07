// Reusable Framer Motion animation variants for premium effects
import { Variants } from 'framer-motion';

// Fade in from bottom
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

// Fade in from left
export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -40
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

// Fade in from right
export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 40
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

// Simple fade
export const fadeIn: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

// Scale up on appear
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

// Container with staggered children
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        }
    }
};

// Stagger children faster
export const staggerFast: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
        }
    }
};

// Hero text reveal (letter by letter)
export const letterReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.03,
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1]
        }
    })
};

// Card hover lift effect
export const cardHover = {
    rest: {
        scale: 1,
        y: 0,
        transition: { duration: 0.3, ease: 'easeOut' }
    },
    hover: {
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' }
    }
};

// Button magnetic effect values
export const magneticButton = {
    rest: { x: 0, y: 0 },
    hover: { scale: 1.05 }
};

// Navbar animation
export const navAnimation: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1],
            delay: 0.2
        }
    }
};

// Section reveal
export const sectionReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
};

// Viewport settings for scroll animations
export const defaultViewport = {
    once: true,
    margin: '-100px'
};
