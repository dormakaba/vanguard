import { FC } from 'react';
import { IDefaultComponentProps, ISizer } from '../../../utils';
export interface Props extends IDefaultComponentProps, ISizer {
    label?: any;
    elements?: any;
    data?: any;
    isCompressed?: boolean;
}
export declare const DefaultTestID = "vg-list";
export declare const List: FC<Props>;
