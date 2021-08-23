import { FC } from 'react';
import { IDefaultComponentProps, IChildrener } from '../../../utils';
interface Props extends IDefaultComponentProps, IChildrener {
    count?: number;
    setGlobalFilter: any;
    globalFilter: any;
    [name: string]: any;
}
export declare const GlobalFilter: FC<Props>;
export {};
