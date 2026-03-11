import React from 'react';
import { Typography } from '../atoms';

export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`mb-8 ${className}`.trim()}>
            <Typography variant="h2" className="mt-0 mb-2 border-none">
                {title}
            </Typography>
            {subtitle && (
                <Typography variant="muted" className="text-lg">
                    {subtitle}
                </Typography>
            )}
        </div>
    );
};
