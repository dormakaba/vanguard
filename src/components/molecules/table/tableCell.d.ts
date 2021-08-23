import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ITyper } from '../../../utils';
interface Props extends IDefaultComponentProps, IChildrener, ITyper {
    isCompressed?: boolean;
    width?: string;
    align?: string;
    colSpan?: any;
    fixed?: boolean;
}
export declare const TableCell: FC<Props>;
export {};
