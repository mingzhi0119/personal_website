import React from 'react';
import { Typography, SkillTag } from '../atoms';
import { ProjectItem } from '@/data/profile';

export interface ProjectCardProps {
    project: ProjectItem;
    className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
    return (
        <div className={`flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 ${className}`.trim()}>
            <div>
                <Typography variant="h3" className="text-primary font-bold">{project.title}</Typography>
                <Typography variant="muted" className="mt-1 font-semibold">{project.context}</Typography>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground grow">
                {project.description.map((desc, idx) => (
                    <li key={idx} className="leading-relaxed">
                        {desc}
                    </li>
                ))}
            </ul>

            {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <SkillTag key={tech} label={tech} />
                    ))}
                </div>
            )}

            {project.links && project.links.length > 0 && (
                <div className="flex gap-3 pt-1">
                    {project.links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-primary px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
                        >
                            {link.label === 'Live Demo' && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                </svg>
                            )}
                            {link.label === 'GitHub' && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            )}
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};
