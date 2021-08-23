import { FC } from 'react';
import { IDefaultComponentProps, IChildrener } from '../../../utils';
interface Props extends IDefaultComponentProps, IChildrener {
    [key: string]: any;
}
export declare const Pagination: FC<Props>;
export {};
