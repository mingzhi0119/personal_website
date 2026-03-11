import React from 'react';
import { SectionHeader, ProjectCard } from '../molecules';
import { ProfileData } from '@/data/profile';
import { SkillTag, Typography } from '../atoms';

export interface ProjectSectionProps {
    projects: ProfileData['projects'];
    className?: string;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, className = '' }) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className={`py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full bg-muted/30 ${className}`.trim()}>
            <SectionHeader title="Projects" subtitle="Featured academic and professional work" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} className="h-full" />
                ))}
            </div>
        </section>
    );
};

export interface SkillSectionProps {
    skills: ProfileData['skills'];
    className?: string;
}

export const SkillSection: React.FC<SkillSectionProps> = ({ skills, className = '' }) => {
    if (!skills || skills.length === 0) return null;

    return (
        <section id="skills" className={`py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full ${className}`.trim()}>
            <SectionHeader title="Skills & Technologies" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skillGroup, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                        <Typography variant="h4" className="text-primary">{skillGroup.category}</Typography>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map(item => (
                                <SkillTag key={item} label={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
