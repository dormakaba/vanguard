import { ReactNode, RefObject } from 'react';
import { IScrollableItem } from './scrollableitem';
export declare const useScrollable: (children: ReactNode) => {
    wrapperRef: RefObject<HTMLDivElement>;
    itemRefs: (RefObject<IScrollableItem> | null | undefined)[];
    fit: {
        left: boolean;
        right: boolean;
    };
    visibleIdxs: {
        [key: number]: number;
    };
    handleItemsIntersection: (idx: any, intersection?: any) => void;
    handleBackward: () => void;
    handleForward: () => void;
};
