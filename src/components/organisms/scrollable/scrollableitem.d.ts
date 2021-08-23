import { RefObject } from 'react';
import { IChildrener, IFullWidther } from '../../../utils';
export interface Props extends IChildrener, IFullWidther {
    root?: RefObject<HTMLElement>;
    rootMargin?: string;
    idx?: number;
    onIntersection?: (idx: number, intersection: IntersectionObserverEntry) => void;
}
export interface IScrollableItem {
    scrollIntoView: (start?: boolean) => void;
}
export declare const ScrollableItem: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<IScrollableItem>>;
