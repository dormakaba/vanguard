declare const sizes: {
    sm: {
        container: string;
        icon: string;
    };
    md: {
        container: string;
        icon: string;
    };
    lg: {
        container: string;
        icon: string;
    };
};
export interface NumberInputProps {
    label?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    caption?: string;
    className?: string;
    id?: string;
    testid?: string;
    name?: string;
    onChange?: (value: number) => any;
    tabIndex?: number;
    step?: number;
    size?: keyof typeof sizes;
    value: number;
    type: any;
    width?: number | string;
    placeholder?: string;
    noPadding?: boolean;
}
export declare const NumberInput: ({ name, id, testid, "aria-labelledby": ariaLabelledBy, "aria-label": ariaLabel, value: defaultValue, onChange, label, caption, className, step, tabIndex, placeholder, size, width, }: NumberInputProps) => JSX.Element;
export {};
