'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Typography, Button } from './atoms';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
                    <Typography variant="h2" className="text-red-500 mb-4 border-none">
                        Something went wrong
                    </Typography>
                    <Typography variant="body" className="mb-8">
                        {this.state.error?.message || 'An unexpected error occurred.'}
                    </Typography>
                    <Button onClick={() => window.location.reload()}>
                        Reload Page
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
}
