import { ReactNode, ReactText } from 'react';
import { Placement } from '@popperjs/core/lib/enums';
export declare type SelectOption = {
    label?: ReactText;
    value?: ReactText;
    component?: ReactNode;
    isNew?: boolean;
    color: 'default' | 'green' | 'red' | 'yellow';
    disabled?: boolean;
};
declare type BaseProps = Pick<React.SelectHTMLAttributes<HTMLSelectElement>, 'disabled' | 'form' | 'name' | 'required' | 'className' | 'id' | 'style' | 'datatype' | 'autoFocus'>;
export interface SelectCommonProps extends BaseProps {
    options?: SelectOption[];
    label?: ReactNode;
    labelPosition?: 'before' | 'inside' | 'after';
    variant?: ReactNode;
    placeholder?: ReactNode;
    children?: any;
    errorText?: ReactText;
    hintText?: ReactText;
    isLoading?: boolean;
    allowClearAll?: boolean;
    allowSearch?: boolean;
    allowMarkWords?: boolean;
    renderValue?: (options: SelectOption[]) => JSX.Element;
    dropdownOffset?: [number, number];
    dropdownPosition?: Placement;
    splitterBefore?: number;
    'data-testid'?: string;
    'data-cy'?: string;
    'aria-expanded'?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    onClick?: () => (event: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: () => void;
    onKeyUp?: () => void;
    onToggle?: (state: boolean) => void;
    asyncOptions?: (search: string) => Promise<SelectOption[]>;
    debounce?: number;
}
export interface SelectSingle extends SelectCommonProps {
    multiple?: false;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    allowSelectAll?: undefined;
    asTags?: undefined;
    asButton?: undefined;
    allowRemoveTag?: undefined;
    allowTagsCount?: undefined;
    textSelected?: undefined;
    textSelectAll?: undefined;
}
export interface SelectMultiple extends SelectCommonProps {
    multiple?: true;
    value?: string[];
    onChange?: (values: string[]) => void;
    allowSelectAll?: boolean;
    asTags?: boolean;
    asButton?: boolean;
    allowRemoveTag?: boolean;
    allowTagsCount?: boolean;
    textSelected?: string;
    textSelectAll?: string;
}
export {};
