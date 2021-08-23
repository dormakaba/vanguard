import React from 'react';
interface LoaderProps {
    error?: boolean;
    retry?: (event: React.MouseEvent<HTMLElement>) => void;
    timedOut?: boolean;
    pastDelay?: boolean;
}
export declare const Loader: React.FC<LoaderProps>;
export {};
