import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ITitler, ILabeler } from '../../../utils';
declare type Option = {
    label?: string;
    value?: string;
    url?: any;
};
export interface Props extends IDefaultComponentProps, IChildrener, ITitler, ILabeler {
    values?: Option[];
    caption?: string;
    url?: any;
}
export declare const DefaultTestID = "vg-subheader";
export declare const Subheader: FC<Props>;
export {};
