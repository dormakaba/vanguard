import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ILabeler } from '../../../utils';
declare type ToolbarItem = {
    label: string;
    path: string;
    props?: any;
};
interface Props extends IDefaultComponentProps, IChildrener, ILabeler {
    [name: string]: any;
    label?: any;
    toolbar?: ToolbarItem[];
    gentleHeadline?: boolean;
    selectedRows?: any;
}
export declare const TableToolbar: FC<Props>;
export {};
