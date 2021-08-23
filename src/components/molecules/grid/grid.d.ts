import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, IColumner, IGaper } from '../../../utils';
export interface Props extends IDefaultComponentProps, IChildrener, IColumner, IGaper {
}
export declare const DefaultTestID = "vg-grid";
export declare const Grid: FC<Props>;
