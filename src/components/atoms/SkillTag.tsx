import React from 'react';

export interface SkillTagProps {
    label: string;
    className?: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ label, className = '' }) => {
    return (
        <span
            className={`inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground ${className}`.trim()}
        >
            {label}
        </span>
    );
};
