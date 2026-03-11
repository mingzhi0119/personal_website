import React from 'react';
import { Typography } from '../atoms';
import { ExperienceItem } from '@/data/profile';

export interface ExperienceCardProps {
    experience: ExperienceItem;
    className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, className = '' }) => {
    return (
        <div className={`relative flex flex-col gap-2 rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md ${className}`.trim()}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <Typography variant="h3" className="text-primary font-bold">{experience.title}</Typography>
                    <Typography variant="h4" className="mt-1">{experience.company}</Typography>
                </div>
                <div className="md:text-right shrink-0">
                    <Typography variant="muted" className="font-semibold">{experience.period}</Typography>
                    {experience.location && <Typography variant="small">{experience.location}</Typography>}
                </div>
            </div>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-muted-foreground">
                {experience.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">
                        {resp}
                    </li>
                ))}
            </ul>
        </div>
    );
};
