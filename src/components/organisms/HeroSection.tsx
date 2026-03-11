import React from 'react';
import { Typography, Button } from '../atoms';
import { ProfileData } from '@/data/profile';

export interface HeroSectionProps {
    data: ProfileData;
    className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data, className = '' }) => {
    return (
        <section className={`flex flex-col items-center justify-center min-h-[70vh] text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted ${className}`.trim()}>
            <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <Typography variant="h1" className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent py-2">
                    {data.name}
                </Typography>

                <Typography variant="h3" className="text-muted-foreground font-medium max-w-2xl mx-auto">
                    {data.role}
                </Typography>

                <div className="flex flex-col space-y-4 text-left mt-8 max-w-3xl mx-auto border-l-4 border-primary pl-6 py-2">
                    {data.summary.map((para, idx) => (
                        <Typography key={idx} variant="body">{para}</Typography>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-4 pt-8">
                    <Button
                        asChild
                        size="lg"
                        className="shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                    >
                        <a href={`mailto:${data.contact.email}`}>Contact Me</a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="hover:-translate-y-1 transition-all"
                    >
                        <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
