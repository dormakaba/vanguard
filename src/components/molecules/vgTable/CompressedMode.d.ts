import { ReactElement } from 'react';
import { TableInstance } from 'react-table';
declare type CompressedModeProps<T extends Record<string, unknown>> = {
    instance: TableInstance<T>;
};
export declare function CompressedMode<T extends Record<string, unknown>>({ instance, }: CompressedModeProps<T>): ReactElement | null;
export {};
