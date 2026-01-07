// Site footer with social links and copyright
import { Container } from '@/components/ui';
import { socialLinks } from '@/data/social';

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 py-12">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <p className="text-sm text-neutral-600">
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                    <ul className="flex items-center gap-6">
                        {socialLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-600 transition-colors hover:text-neutral-900"
                                    aria-label={link.label}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
}
