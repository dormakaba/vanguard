import { FC } from 'react';
import { IDefaultComponentProps } from '../../../../utils';
import { Props as TableProps } from '../../../molecules/vgTable';
export interface Props extends IDefaultComponentProps, TableProps {
}
export declare const DefaultTestID = "vg-wishlist";
export declare const WishlistTable: FC<Props>;
