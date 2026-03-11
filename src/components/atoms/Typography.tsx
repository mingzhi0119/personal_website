import React from 'react';

export interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'muted';
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
    variant,
    children,
    className = '',
    as,
}) => {
    const Component = as || getSemanticElement(variant);

    const baseStyles = {
        h1: 'text-4xl md:text-6xl font-extrabold tracking-tight text-foreground',
        h2: 'text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-8 mb-4 border-b border-border pb-2',
        h3: 'text-2xl font-semibold tracking-tight text-foreground',
        h4: 'text-xl font-medium tracking-tight text-foreground',
        body: 'text-base leading-7 text-foreground',
        small: 'text-sm font-medium leading-none text-muted-foreground',
        muted: 'text-sm text-muted-foreground',
    };

    return (
        <Component className={`${baseStyles[variant]} ${className}`.trim()}>
            {children}
        </Component>
    );
};

function getSemanticElement(variant: TypographyProps['variant']): React.ElementType {
    switch (variant) {
        case 'h1': return 'h1';
        case 'h2': return 'h2';
        case 'h3': return 'h3';
        case 'h4': return 'h4';
        case 'body': return 'p';
        case 'small': return 'small';
        case 'muted': return 'p';
        default: return 'p';
    }
}
