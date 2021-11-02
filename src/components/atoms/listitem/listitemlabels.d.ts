import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ISizer, IWeighter } from '../../../utils';
interface Props extends IDefaultComponentProps, IChildrener, ISizer, IWeighter {
    isCompressed?: boolean;
}
export declare const ListItemlabels: FC<Props>;
export {};
