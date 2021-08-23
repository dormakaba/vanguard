import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, IVarianter, ISizer } from '../../../utils';
export interface Props extends IDefaultComponentProps, IChildrener, IVarianter, ISizer {
}
export declare const DefaultTestID = "vg-list-item";
export declare const ListItem: FC<Props>;
