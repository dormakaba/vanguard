import { FC } from 'react';
import { IDefaultComponentProps, ISizer } from '../../../utils';
export interface Props extends IDefaultComponentProps, ISizer {
    range?: number;
    total?: number;
    handlePagination: (value: number) => void;
    current?: number;
    hideLeftArrow?: boolean;
    hideRightArrow?: boolean;
}
export declare const DefaultTestID = "vg-list";
export declare const Pagination: FC<Props>;
