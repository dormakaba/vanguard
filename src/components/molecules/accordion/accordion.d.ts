import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, IBackgrounder, ISizer, ILabeler } from '../../../utils';
export interface Props extends IDefaultComponentProps, IChildrener, ISizer, ILabeler, IBackgrounder {
    data?: any;
    isLoading?: string;
}
export declare const DefaultTestID = "vg-list";
export declare const Accordion: FC<Props>;
