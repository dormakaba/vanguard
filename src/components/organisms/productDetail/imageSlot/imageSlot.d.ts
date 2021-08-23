import { FC } from 'react';
import { IDefaultComponentProps, IIder, IImager } from '../../../../utils';
export interface IImage extends IIder, IImager {
}
export interface Props extends IDefaultComponentProps {
    images?: Array<IImage>;
}
export declare const DefaultTestID = "vg-image-slot";
export declare const ImageSlot: FC<Props>;
