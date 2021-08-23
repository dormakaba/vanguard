import { FC } from 'react';
import { IDefaultComponentProps } from '../../../utils';
export interface Item {
    title?: string;
    currency?: string;
    price?: string;
}
export interface ScalePricingProps extends IDefaultComponentProps {
    items?: Array<Item>;
}
export declare const DefaultTestID = "vg-scale-pricing";
export declare const ScalePricing: FC<ScalePricingProps>;
