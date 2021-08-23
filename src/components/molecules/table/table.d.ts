import { FC } from 'react';
import { IDefaultComponentProps, IBackgrounder, IChildrener, IVarianter } from '../../../utils';
export interface Props extends IDefaultComponentProps, IBackgrounder, IChildrener, IVarianter {
    columns?: any;
    toolbar?: any;
    serverdata?: any;
    indeterminate?: any;
    gentleHeadline?: boolean;
    isCompressed?: boolean;
    isSelectable?: boolean;
    fixed?: boolean;
    label?: string;
}
export declare const DefaultTestID = "vg-table";
export declare function SelectColumnFilter({ column: { setFilter, preFilteredRows, id, header } }: {
    column: {
        setFilter: any;
        preFilteredRows: any;
        id: any;
        header: any;
    };
}): JSX.Element;
export declare const Table: FC<Props>;
