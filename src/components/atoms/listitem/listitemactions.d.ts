import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ISizer } from '../../../utils';
interface Props extends IDefaultComponentProps, IChildrener, ISizer {
    isCompressed?: boolean;
}
export declare const ListItemActions: FC<Props>;
export {};
