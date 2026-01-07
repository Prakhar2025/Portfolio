// Section heading with gradient text option
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    gradient?: boolean;
    align?: 'left' | 'center';
}

export default function SectionHeading({
    title,
    subtitle,
    className,
    gradient = false,
    align = 'center'
}: SectionHeadingProps) {
    return (
        <div className={cn(
            'mb-16',
            align === 'center' && 'text-center',
            className
        )}>
            <h2 className={cn(
                'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight',
                gradient
                    ? 'bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent'
                    : 'text-white'
            )}>
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
