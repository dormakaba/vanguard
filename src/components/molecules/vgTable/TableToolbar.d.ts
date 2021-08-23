import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import { TableInstance } from 'react-table';
import { TableMouseEventHandler } from '../../../types/react-table-config';
declare type InstanceActionButton<T extends Record<string, unknown>> = {
    instance: TableInstance<T>;
    icon?: string;
    onClick: TableMouseEventHandler;
    enabled?: (instance: TableInstance<T>) => boolean;
    label: string;
    variant?: any;
    color?: any;
};
declare type ActionButton = {
    icon?: string;
    onClick: MouseEventHandler;
    enabled?: boolean;
    label: string;
    variant?: any;
    color?: any;
};
export declare const InstanceSmallIconActionButton: <T extends Record<string, unknown>>({ instance, icon, onClick, label, enabled, variant, }: InstanceActionButton<T>) => ReactElement;
export declare const SmallIconActionButton: ({ icon, onClick, label, enabled, variant, }: ActionButton) => ReactElement;
declare type TableToolbarProps<T extends Record<string, unknown>> = {
    instance: TableInstance<T>;
    label?: any;
    onAdd?: TableMouseEventHandler;
    onDelete?: TableMouseEventHandler;
    onEdit?: TableMouseEventHandler;
    onExport?: TableMouseEventHandler;
};
export declare function TableToolbar<T extends Record<string, unknown>>({ instance, onAdd, onDelete, onEdit, onExport, }: PropsWithChildren<TableToolbarProps<T>>): ReactElement | null;
export {};
