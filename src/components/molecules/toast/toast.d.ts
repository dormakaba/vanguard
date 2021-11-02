import { FC } from 'react';
import { IDefaultComponentProps, ICloser } from '../../../utils';
declare const variants: {
    default: {
        toast: string;
        icon: string;
    };
    success: {
        toast: string;
        icon: string;
    };
    error: {
        toast: string;
        icon: string;
    };
    warning: {
        toast: string;
        icon: string;
    };
};
export declare type ToastVariant = keyof typeof variants;
export interface Props extends IDefaultComponentProps, ICloser {
    duration?: number;
    subtitle: string;
    variant: ToastVariant;
}
export declare const DefaultTestID = "vg-toast";
export declare const Toast: FC<Props>;
export {};
