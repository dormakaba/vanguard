import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ITyper } from '../../../utils';
interface Props extends IDefaultComponentProps, IChildrener, ITyper {
    [key: string]: any;
}
export declare const TableContainer: FC<Props>;
export {};
