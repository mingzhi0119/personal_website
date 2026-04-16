import React from 'react';
import { SectionHeader, ProjectCard } from '../molecules';
import { ProfileData } from '@/data/profile';
import { Button, SkillTag, Typography } from '../atoms';

export interface FeaturedProjectSectionProps {
    project: ProfileData['featuredProject'];
    className?: string;
}

export const FeaturedProjectSection: React.FC<FeaturedProjectSectionProps> = ({ project, className = '' }) => {
    if (!project) return null;

    return (
        <section id="featured-work" className={`py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full ${className}`.trim()}>
            <SectionHeader
                title="Featured Engineering Story"
                subtitle="A full-stack AI systems project built with deployment discipline, bounded runtime behavior, and operator-visible controls."
            />

            <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-background to-muted/60 shadow-sm">
                <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)] lg:gap-10">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                                Featured Work
                            </span>
                            <div className="space-y-3">
                                <Typography variant="h2" as="h3" className="mt-0 mb-0 border-none text-primary">
                                    {project.title}
                                </Typography>
                                <Typography variant="h4" className="text-foreground">
                                    {project.context}
                                </Typography>
                                <Typography variant="body" className="text-lg leading-8 text-muted-foreground">
                                    {project.headline}
                                </Typography>
                            </div>
                        </div>

                        <Typography variant="body" className="text-muted-foreground">
                            {project.summary}
                        </Typography>

                        <div className="flex flex-wrap gap-3">
                            {project.links.map((link, index) => (
                                <Button
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant={index === 0 ? 'primary' : 'outline'}
                                    size="lg"
                                >
                                    {link.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="rounded-2xl border border-border bg-background/90 p-6">
                            <Typography variant="h4" className="mb-4">
                                Engineering Highlights
                            </Typography>
                            <ul className="list-disc space-y-3 pl-5 text-muted-foreground">
                                {project.highlights.map((highlight) => (
                                    <li key={highlight} className="leading-relaxed">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-background/90 p-6">
                            <Typography variant="h4" className="mb-4">
                                Core Stack
                            </Typography>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <SkillTag key={tech} label={tech} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export interface ProjectSectionProps {
    projects: ProfileData['projects'];
    className?: string;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects, className = '' }) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className={`py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full bg-muted/30 ${className}`.trim()}>
            <SectionHeader title="Projects" subtitle="Selected academic, personal, and engineering work" />
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
