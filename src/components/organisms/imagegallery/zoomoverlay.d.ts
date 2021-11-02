import { FC } from 'react';
import { IDefaultComponentProps } from '../../../utils';
import { IImage } from './imagegallery';
export interface Props extends IDefaultComponentProps {
    current?: number;
    images?: Array<IImage>;
    onClose?: () => void;
}
export declare const DefaultTestID = "vg-image-gallery-zoom-overlay";
export declare const ZoomOverlay: FC<Props>;
