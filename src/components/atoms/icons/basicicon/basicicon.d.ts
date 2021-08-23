import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, IColorer, Size } from '../../../../utils';
export declare type IconSize = Size | 'tn';
export interface Props extends IDefaultComponentProps, IChildrener, IColorer {
    size?: IconSize;
    halfHeight?: boolean;
}
export declare const DefaultTestID = "vg-icon";
export declare const getNumericSize: (size: IconSize) => number;
export declare const BasicIcon: FC<Props>;
