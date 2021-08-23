import React from 'react';
import { SelectOption, SelectCommonProps, SelectMultiple, SelectSingle } from '../select.types';
interface Props {
    multiple: boolean;
    isOpen: boolean;
    options: SelectOption[];
    asTags: SelectMultiple['asTags'];
    asButton: boolean;
    value: SelectMultiple['value'] | SelectSingle['value'];
    placeholder: SelectCommonProps['placeholder'];
    textSelected: SelectMultiple['textSelected'];
    allowTagsCount: SelectMultiple['allowTagsCount'];
    allowClearAll: SelectCommonProps['allowClearAll'];
    allowRemoveTag: SelectMultiple['allowRemoveTag'];
    select: React.RefObject<HTMLSelectElement>;
    renderValue: SelectCommonProps['renderValue'];
    classNames: any;
}
export declare const SelectValue: React.FC<Props>;
export {};
