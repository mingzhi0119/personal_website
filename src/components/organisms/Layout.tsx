import React from 'react';
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
                    <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="font-bold text-lg text-primary tracking-tight">
                    <a href="#">MH.</a>
                </div>
                <div className="flex gap-6">
                    <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</a>
                    <a href="#education" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Education</a>
                    <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                </div>
            </div>
        </nav>
    );
};
