import React from 'react';
import { CellProps } from 'react-table';
export declare const TableCell: React.FC<CellProps<any>>;
interface TooltipProps {
    text: string;
    tooltip?: string;
    position: any;
}
export declare const TableTooltip: React.FC<TooltipProps>;
export {};
