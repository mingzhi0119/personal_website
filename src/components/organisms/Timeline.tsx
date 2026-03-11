import React from 'react';
import { SectionHeader } from '../molecules';
import { ExperienceCard } from '../molecules/ExperienceCard';
import { ProfileData } from '@/data/profile';
import { Typography } from '../atoms';

export interface ExperienceSectionProps {
    experience: ProfileData['experience'];
    className?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, className = '' }) => {
    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className={`py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full ${className}`.trim()}>
            <SectionHeader title="Experience" subtitle="My professional journey" />
            <div className="space-y-6">
                {experience.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))}
            </div>
        </section>
    );
};

export interface EducationSectionProps {
    education: ProfileData['education'];
    className?: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education, className = '' }) => {
    if (!education || education.length === 0) return null;

    return (
        <section id="education" className={`py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full ${className}`.trim()}>
            <SectionHeader title="Education" subtitle="My academic background" />
            <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.id} className="flex flex-col gap-2 rounded-xl border border-border bg-background p-6 shadow-sm">
                        <Typography variant="h3" className="text-primary font-bold">{edu.institution}</Typography>
                        <Typography variant="h4" className="mt-1">{edu.degree}</Typography>
                        <Typography variant="muted" className="font-semibold">{edu.period}</Typography>
                        {edu.description && <Typography variant="body" className="mt-2">{edu.description}</Typography>}
                    </div>
                ))}
            </div>
        </section>
    );
};
