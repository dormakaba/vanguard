import { KeyboardEventHandler, DependencyList, MouseEventHandler, FocusEventHandler, RefCallback } from 'react';
export interface MenuOpts {
    defaultIsOpen?: boolean;
}
export default function useMenu(key: string, opts?: MenuOpts): MenuState;
export interface MenuState {
    isOpen: boolean;
    buttonProps: ButtonProps;
    menuProps: MenuProps;
    getItemProps(callback?: () => void, deps?: DependencyList, opts?: ItemOptions): ItemProps;
    getItemCheckboxProps(opts: ItemCheckboxOptions): ItemCheckboxProps;
}
export interface ButtonProps {
    role: 'button';
    id: string;
    'aria-haspopup': 'menu';
    'aria-expanded'?: 'true';
    'aria-controls': string;
    onClick: MouseEventHandler;
    onKeyDown: KeyboardEventHandler;
    onBlur: FocusEventHandler;
}
export interface MenuProps {
    role: 'menu';
    id: string;
    'aria-labelledby': string;
    ref: RefCallback<HTMLElement | null>;
    onKeyDown: KeyboardEventHandler;
    onBlur: FocusEventHandler;
}
export interface ItemProps {
    role: 'menuitem';
    tabIndex: -1;
    'aria-disabled'?: true;
    onClick: MouseEventHandler;
    onKeyDown: KeyboardEventHandler;
}
export interface ItemOptions {
    disabled?: boolean;
}
export interface ItemCheckboxOptions {
    checked: boolean;
    disabled?: boolean;
    onToggle(): void;
}
export interface ItemCheckboxProps {
    role: 'menuitemcheckbox';
    tabIndex: -1;
    'aria-checked': boolean;
    'aria-disabled'?: true;
    onClick: MouseEventHandler;
    onKeyDown: KeyboardEventHandler;
}
