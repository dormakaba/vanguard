import React from 'react';
import { SelectOption } from '..';
import { SelectCommonProps, SelectMultiple } from '../select.types';
interface Props {
    isOpen?: boolean;
    selectedOptions: SelectOption[];
    placeholder: SelectCommonProps['placeholder'];
    allowTagsCount: SelectMultiple['allowTagsCount'];
    allowClearAll: SelectCommonProps['allowClearAll'];
    allowRemoveTag: SelectMultiple['allowRemoveTag'];
    select: React.RefObject<HTMLSelectElement>;
}
export declare const SelectedValueTags: React.FC<Props>;
export {};
