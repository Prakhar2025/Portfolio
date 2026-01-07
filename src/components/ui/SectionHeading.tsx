// Consistent heading component for section titles
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
    return (
        <div className={cn('mb-12 text-center', className)}>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-lg text-neutral-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
