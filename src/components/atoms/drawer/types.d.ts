import React, { MutableRefObject } from 'react';
import { Props as FooterProps } from './DrawerFooter/types';
export interface Props {
    id?: string;
    open?: boolean;
    position?: 'left' | 'right';
    onClose: () => void;
    width?: string;
    withOverlay?: boolean;
}
export interface DrawerStaticProps {
    Content?: React.FC;
    Footer?: React.FC<FooterProps>;
    Header?: React.FC;
}
interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}
export interface UseScrollStateProps {
    scrollState: ScrollState;
    ref: MutableRefObject<HTMLDivElement>;
    dispatch: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition';
        value: boolean | number;
    }>;
}
export interface DrawerContextType {
    id: string;
    scrollState?: ScrollState;
    dispatch?: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition';
        value: boolean | number;
    }>;
    onClose: () => void;
}
export declare type DrawerStyledProps = {
    position: string;
    width: string;
    open: boolean;
};
export {};
