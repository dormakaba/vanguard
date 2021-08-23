import React, { AriaAttributes } from 'react';
declare const variants: {
    button: ({ className, children, checked, ...props }: SwitchProps) => JSX.Element;
    default: ({ className, children, checked, id, size, onChange, labelPosition, ...props }: Partial<SwitchProps>) => JSX.Element;
    buttons: ({ className, children, size, checked, offChildren, offChildrenIcon, onChildren, onChildrenIcon, ...props }: Partial<SwitchProps>) => JSX.Element;
};
declare type SwitchSize = 'tiny' | 'base' | 'large';
declare type LabelPosition = 'left' | 'right' | 'inside';
export interface SwitchProps extends AriaAttributes {
    id?: string;
    value?: string;
    children?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    className?: string;
    variant?: keyof typeof variants;
    checked?: boolean;
    defaultChecked?: boolean;
    size?: SwitchSize;
    labelPosition?: LabelPosition;
    onChildren?: React.ReactNode;
    offChildren?: React.ReactNode;
    offChildrenIcon?: string;
    onChildrenIcon?: string;
}
export declare const Switch: ({ variant, checked, defaultChecked, onChange, ...props }: SwitchProps) => JSX.Element;
export {};
