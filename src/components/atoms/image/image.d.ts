import { FC } from 'react';
import { IDefaultComponentProps, IImager, ISrcSeter, IClicker, IBlurer, IFluider, IRatioer, ILazier, ILoader, IFullWidther } from '../../../utils';
export interface Props extends IDefaultComponentProps, IImager, ISrcSeter, IClicker, IBlurer, IFluider, IRatioer, ILazier, ILoader, IFullWidther {
}
export declare const DefaultTestID = "vg-image";
export declare const Image: FC<Props>;
