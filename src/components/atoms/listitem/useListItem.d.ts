import { ReactNode } from 'react';
export declare const useListItem: (children: ReactNode, props: {
    [key: string]: any;
}) => (() => ReactNode)[];
