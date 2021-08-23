import React from 'react';
import { SelectMultiple, SelectOption } from '../select.types';
interface Props {
    options: SelectOption[];
    visibleOptions: SelectOption[];
    value: SelectMultiple['value'];
    onChange: SelectMultiple['onChange'];
    textSelectAll: SelectMultiple['textSelectAll'];
}
declare const SelectAllButton: React.FC<Props>;
export { SelectAllButton };
