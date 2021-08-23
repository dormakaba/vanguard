import { FC } from 'react';
import { IDefaultComponentProps } from '../../../utils';
import { IconSize } from '../icons/basicicon';
export interface Props extends IDefaultComponentProps {
    [key: string]: any;
}
export declare const DefaultTestID = "vg-boxlayout";
export declare const getNumericSize: (size: IconSize) => number;
export declare const Icon: FC<Props>;
