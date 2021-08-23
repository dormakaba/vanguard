import { FC } from 'react';
import { IDefaultComponentProps } from '../../../../utils';
interface IWishlistItem {
    label: string;
    value: string;
    isShared: boolean;
}
interface ISalesDetailData {
    wishlistCode?: string;
    wishlistName?: string;
    wishlistDescription?: string;
    quantity?: number;
    isPublic?: boolean;
}
declare type TOnTranslate = (key: string, defaultValue?: string, ...params: Array<string | number>) => string;
export interface Props extends IDefaultComponentProps {
    data?: any;
    wishlists?: Array<IWishlistItem>;
    hasFullWidth?: boolean;
    configureUri?: string;
    supportUri?: string;
    showSyncWithSapERP?: boolean;
    showSapNetWeight?: boolean;
    showSapGrossWeight?: boolean;
    showSapWeightUnit?: boolean;
    showSapDimensions?: boolean;
    showAddToCart?: boolean;
    showAddToWishlist?: boolean;
    showSapBlocked?: boolean;
    showQuantityField?: boolean;
    minQuantityWithoutConfirmation?: number;
    createdWishlistCode?: string;
    onChange?: (data: ISalesDetailData) => void;
    onAddToCard?: () => void;
    onAddToWishlist?: () => void;
    onTranslate?: TOnTranslate;
    onCreateWishlist?: () => Promise<any>;
}
export declare const DefaultTestID = "vg-sales-detail";
export declare const SalesDetail: FC<Props>;
export {};
