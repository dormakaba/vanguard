import { RefObject } from 'react';
export declare const useIntersectionObserver: (root?: RefObject<HTMLElement> | undefined, rootMargin?: string, threshold?: number | Array<number>) => {
    boxRef: import("react").MutableRefObject<any>;
    intersection: IntersectionObserverEntry | undefined;
};
