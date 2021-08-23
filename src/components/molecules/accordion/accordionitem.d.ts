import { FC } from 'react';
import { IDefaultComponentProps, IChildrener } from '../../../utils';
declare type Item = any;
export interface Props extends IDefaultComponentProps, IChildrener {
    title?: string;
    content?: string;
    disabled?: boolean;
    isOpen?: boolean;
    items?: Array<Item>;
}
export declare const DefaultTestID = "vg-accordion-item";
export declare const AccordionItem: FC<Props>;
export {};
