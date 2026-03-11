import React from 'react';

type ButtonBaseProps = {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

// When href is provided, renders as <a>; otherwise renders as <button>
type ButtonAsAnchor = ButtonBaseProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = ButtonBaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const getClasses = (variant: ButtonBaseProps['variant'] = 'primary', size: ButtonBaseProps['size'] = 'md', className = '') => {
    const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    const variants = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-primary text-primary hover:bg-primary/10',
        ghost: 'hover:bg-muted hover:text-foreground text-muted-foreground',
    };
    const sizes = {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8 text-base',
    };
    return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
        const classes = getClasses(variant, size, className);

        if ('href' in props && props.href !== undefined) {
            const { href, ...anchorProps } = props as ButtonAsAnchor;
            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={href}
                    className={classes}
                    {...anchorProps}
                />
            );
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                {...(props as ButtonAsButton)}
            />
        );
    }
);
Button.displayName = 'Button';
