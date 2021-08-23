import React from 'react';
export declare function withControl<Props extends {
    value?: any;
    defaultValue?: any;
    onChange?: any;
}>(Component: React.FC<Props>): (props: Props) => JSX.Element;
export declare function useDebounce(func: any, ms: any): (...args: any[]) => Promise<unknown>;
