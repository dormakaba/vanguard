import { FC } from 'react';
import { IDefaultComponentProps, IVarianter } from '../../../../utils';
export interface Props extends IDefaultComponentProps, IVarianter {
    iconType?: any;
}
export declare const DefaultTestID = "vg-header-item";
export declare const HeaderItem: FC<Props>;
