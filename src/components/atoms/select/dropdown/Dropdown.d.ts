import React from 'react';
import { SelectCommonProps, SelectMultiple, SelectOption, SelectSingle } from '../select.types';
interface Props {
    options: SelectOption[];
    visibleOptions: SelectOption[];
    isOpen: boolean;
    toggleDropdown: (state: boolean) => void;
    search: string;
    children: React.FC;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    'data-testid'?: string;
    multiple: boolean;
    allowSelectAll: boolean;
    allowSearch: boolean;
    allowMarkWords: boolean;
    textSelectAll?: string;
    value: SelectSingle['value'] | SelectMultiple['value'];
    onChange: SelectSingle['onChange'] | SelectMultiple['onChange'];
    selectRef: HTMLSelectElement | null;
    visibleFieldRef: HTMLDivElement | null;
    dropdownOffset: [x: number, y: number];
    dropdownPosition: SelectCommonProps['dropdownPosition'];
    splitterBefore: SelectCommonProps['splitterBefore'];
    disabled?: boolean;
}
export declare const Dropdown: React.FC<Props>;
export {};
