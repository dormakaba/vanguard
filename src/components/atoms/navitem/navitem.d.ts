import { FC } from 'react';
import { IDefaultComponentProps, ISizer, IPaddinger } from '../../../utils';
export interface Props extends IDefaultComponentProps, ISizer, IPaddinger {
    [key: string]: any;
}
export declare const DefaultTestID = "vg-boxlayout";
export declare const Navitem: FC<Props>;
