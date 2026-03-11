import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {

        const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

        const variants = {
            primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            outline: 'border border-primary text-primary hover:bg-primary/10',
            ghost: 'hover:bg-muted hover:text-foreground text-muted-foreground'
        };

        const sizes = {
            sm: 'h-9 px-3',
            md: 'h-10 px-4 py-2',
            lg: 'h-11 px-8 rounded-md text-base'
        };

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

        return (
            <button
                ref={ref}
                className={classes}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
