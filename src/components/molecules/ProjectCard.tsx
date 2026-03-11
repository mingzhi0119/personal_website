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
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <SkillTag key={tech} label={tech} />
                    ))}
                </div>
            )}
        </div>
    );
};
