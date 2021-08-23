import { ReactNode } from 'react';
export declare const useList: (children: ReactNode, props: {
    [key: string]: any;
}) => (() => ReactNode)[];
