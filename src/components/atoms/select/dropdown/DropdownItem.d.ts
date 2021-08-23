import React, { ReactText } from 'react';
import { SelectOption } from '../select.types';
interface Props extends SelectOption {
    search: string;
    onClickOption: (value: ReactText) => void;
    isSelected: boolean;
    allowMarkWords: boolean;
}
export declare const DropdownItem: React.FC<Props>;
export {};
