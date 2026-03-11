'use client';

import React, { useState } from 'react';
import { Typography } from '../atoms';
import { ContactInfo } from '@/data/profile';

export interface FooterProps {
    contact: ContactInfo;
    name: string;
}

export const Footer: React.FC<FooterProps> = ({ contact, name }) => {
    return (
        <footer className="w-full py-8 text-center border-t border-border mt-16 bg-muted">
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
                <Typography variant="muted">
                    &copy; {new Date().getFullYear()} {name}. All rights reserved.
                </Typography>
                <div className="flex gap-4">
                    <a href={`mailto:${contact.email}`} className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                        Email Me
                    </a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

const NAV_LINKS = [
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
];

export const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="font-bold text-lg text-primary tracking-tight">
                    <a href="#">MH.</a>
                </div>

                {/* Desktop nav */}
                <div className="hidden sm:flex gap-6">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a key={label} href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            {label}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger button */}
                <button
                    className="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-muted transition-colors"
                    onClick={() => setOpen(prev => !prev)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="sm:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 pb-4">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50 last:border-b-0"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
