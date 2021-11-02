import { FC } from 'react';
import { IDefaultComponentProps, IIder, IImager } from '../../../utils';
export interface IImage extends IIder, IImager {
}
export interface Props extends IDefaultComponentProps {
    images?: Array<IImage>;
    thumbnails?: Array<IImage>;
    zooms?: Array<IImage>;
}
export declare const DefaultTestID = "vg-image-gallery";
export declare const ImageGallery: FC<Props>;
