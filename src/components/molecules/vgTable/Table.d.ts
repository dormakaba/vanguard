import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import { FilterProps, Row, TableInstance, TableOptions } from 'react-table';
import { ITester } from '../../../utils';
export interface TableProperties<T extends Record<string, unknown>> extends TableOptions<T>, ITester {
    id?: string;
    label?: string;
    itemsLimit?: number;
    isExtended?: boolean;
    isCompressed?: boolean;
    isFixed?: boolean;
    isSelectable?: boolean;
    columns?: any;
    onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
    onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
    onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
    onExport?: (instance: TableInstance<T>) => MouseEventHandler;
    onClick?: (row: Row<T>) => void;
}
export declare function SelectColumnFilter({ column: { render, setFilter, preFilteredRows, id }, }: FilterProps): JSX.Element;
export declare function NumberRangeColumnFilter({ column: { filterValue, render, preFilteredRows, setFilter, id }, }: FilterProps): JSX.Element;
export declare function Table<T extends Record<string, unknown>>(props: PropsWithChildren<TableProperties<T>>): ReactElement;
